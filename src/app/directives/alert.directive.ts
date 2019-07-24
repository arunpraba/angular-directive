import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {
  message = 'Click me to get alert'
  @Input() appAlert;
  @HostBinding() get innerText() {
    return this.message;
  }
  @HostListener('click', ['$event']) onClick($event) {
    this.message = this.appAlert
  }

  constructor() {}
}
