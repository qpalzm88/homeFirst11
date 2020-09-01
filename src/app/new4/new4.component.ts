import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new4',
  template: `
    <div class="new4">
      <h2>Component 4</h2>
    </div>`,
  styles:[`
    .new4{
      padding: .5rem;
      border: 2px solid black;}`]  
})
export class New4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
