import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { DcComponent } from './dc/dc.component';

const routes: Routes = [
  { path: '', redirectTo: 'dc', pathMatch: 'full' },
  { path: 'dc', component: DcComponent },
  { path: 'attribute', component: AttributeComponent },
  { path: 'structural', component: StructuralComponent },
  { path: 'input', component: InputComponent },
  { path: '**', redirectTo: 'dc', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
