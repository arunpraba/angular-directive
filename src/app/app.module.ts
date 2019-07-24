import { TrackService } from './service/track.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

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
import { AlertDirective } from './directives/alert.directive';
import { TrackDirective } from './directives/track.directive';
import { NumberOnlyDirective } from './directives/number.directive';
import { TextOnlyDirective } from './directives/text-only.directive';

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
    InnerTextDcDirective,
    AlertDirective,
    TrackDirective,
    TextOnlyDirective,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
