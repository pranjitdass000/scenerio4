import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styles: ['']
})
export class ChildComponentComponent implements OnInit {
  
  @Output() public childEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('I am from child component')
  }

}
