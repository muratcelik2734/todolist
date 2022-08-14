import { Directive, ElementRef, Input, NgModule, Optional, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '([formInvalid])',
})
export class FormInvalidDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('formInvalid') message: string = 'Required field!';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('formInvalidMin') min: number;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('formInvalidMax') max: number;

  // belli bir html elementiindeki değişimi yakalar
  observer = new MutationObserver((mutations) => {
    mutations?.forEach(() => {
      this.onInputChange();
    });
  });
  isInvalid: boolean = false;
  isTouched: boolean = false;
  alert: HTMLDivElement;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Optional() private control: NgControl
  ) {
    this.alert = this.renderer.createElement('div');

    this.alert.innerHTML = this.message;
    this.alert.classList.add('invalid-alert');
    this.alert.classList.add('d-none');
    if (el) {
      this.renderer.appendChild(el.nativeElement.parentElement, this.alert);
      this.observer.observe(this.el.nativeElement, {
        attributes: true,
        childList: true,
        characterData: true,
      });
    }
  }
  addBorder: boolean = false;
  removeBorder: boolean = false;

  onInputChange() {
    this.alert.classList.add('d-none');
    this.alert.innerHTML = this.message;
    this.isInvalid = false;
    this.isTouched = false;
    this.el.nativeElement.classList.forEach((element) => {
      if (element === 'ng-invalid') {
        this.isInvalid = true;
      }
      if (element === 'ng-touched') {
        this.isTouched = true;
      }
      if (this.isInvalid && this.isTouched) {
        this.alert.classList.remove('d-none');
        if (this.control) {
          if (this.control.hasError('required')) {
            this.alert.innerHTML = this.message ? this.message : 'Bu Alan Boş Bırakılamaz!';
          }
        }
      } else {
        this.alert.classList.add('d-none');
      }
    });
  }
}
