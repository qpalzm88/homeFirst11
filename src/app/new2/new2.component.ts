import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new2',
  template: `
  <div class="new2">
    <h2>Component 2</h2>
  </div>`,
  styleUrls: ['./new2.component.css']
})
export class New2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
