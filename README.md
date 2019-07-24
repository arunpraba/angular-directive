# Angular Directive

Directive is class to change the appearance and behaviour of a HTML element, DOM element or a Component

1.Component
2.Attribute Directive
3.Structural Directive

## selector

tag selector `'h1'`
attribute selector `'[innerTable]'`

`@HostBinding()` binding something to DOM (Ex.classes, property)
`@HostListner()` taking the dom event from the Component to Directive
`@Input()` taking the input from the Component to Directive

if we are sending input to Directive, then we have to be declare directive `[inputToDirective]` or else `justDirective`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.
