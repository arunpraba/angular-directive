import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttrHostListnerDirective } from './directives/attr-host-listner.directive';
import { AttrHostBindingDirective } from './directives/attr-host-binding.directive';
import { StrTemplateDirective } from './directives/str-template.directive';
import { AttributeComponent } from './attribute/attribute.component';
import { InputComponent } from './input/input.component';
import { StructuralComponent } from './structural/structural.component';
import { DcComponent } from './dc/dc.component';
import { HighlightDirective } from './directives/highlight.directive';
import { InnerTextDcDirective } from './directives/inner-text-dc.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttrHostListnerDirective,
    AttrHostBindingDirective,
    StrTemplateDirective,
    AttributeComponent,
    InputComponent,
    StructuralComponent,
    DcComponent,
    HighlightDirective,
    InnerTextDcDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
