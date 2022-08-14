import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { FormInvalidDirective } from '../directives/form-validators.directive';
import { RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './user-pages/login/login-register.component';
@NgModule({
  declarations: [
    UserComponent,
    LoginRegisterComponent,
    FormInvalidDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    RouterModule,
  ],

  providers: [UserService],
  bootstrap: []
})
export class UserModule { }
