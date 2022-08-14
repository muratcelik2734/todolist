import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModel } from '../../user-models';
import { loadUserSuccess } from '../../user-store/user.actions';
import { UserService } from '../../user.service';
export enum UserPageType {
  'login' = 'login',
  'register' = 'register',
}

@Component({
  selector: 'app-login',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  pageType = UserPageType;
  selectPageType = UserPageType.login;
  form: FormGroup;
  allUser;
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private store: Store,
    private router: Router) {

  }


  ngOnInit(): void {
    this.initForm();
    this.getAllUser();
  }

  initForm() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  getAllUser() {
    this.userService.getAllUsers().subscribe(resp => {
      this.allUser = resp;
    });
  }

  kayitOl() {
    this.selectPageType = this.pageType.register;
    this.form.addControl('name', new FormControl(null,Validators.required));
    this.form.addControl('surname', new FormControl(null,Validators.required) );

  }

  login() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const formVal = this.form.value;
    let userData = this.allUser.find(x => x.email === formVal.email && x.password === formVal.password);
    if (userData) {
      //Kayıtlı bir kullanıcı
      this.store.dispatch(loadUserSuccess({ user: userData }));
      this.router.navigateByUrl('pages');
    } else {
      //Yeni kayıt yap
      this.selectPageType = this.pageType.register;
      this.kayitOl();
    }
  }
  register() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    const formVal = this.form.value;
    this.userService.loginOrRegister(formVal).subscribe((resp: any) => {
      this.store.dispatch(loadUserSuccess({ user: resp }));
      this.router.navigateByUrl('pages');
    });

  }
}
