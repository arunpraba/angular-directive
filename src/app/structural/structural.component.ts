import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent {
  isShow = false
  names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan"]
  constructor() {}

  showButton() {
  	this.isShow = !this.isShow
  }
}
