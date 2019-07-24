import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  message = 'I am input from Component';
  secondMessage = 'I am second input from Component';
  constructor() {}

  ngOnInit() {}
}
