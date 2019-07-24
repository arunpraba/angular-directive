import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInnerTextDc]'
})
export class InnerTextDcDirective {
  @Input() appInnerTextDc;
  @HostBinding() get innerText() {
    return this.appInnerTextDc;
  }
  constructor() {}
}
