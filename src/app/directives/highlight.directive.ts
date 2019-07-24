import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding() innerHtml = `
  <h1>Hey am directive</h1>
  <p class="text-muted">I am coming from directive</p>
  `;
}
