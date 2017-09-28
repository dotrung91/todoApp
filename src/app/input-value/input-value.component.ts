import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {
  @Output() newTodo = new EventEmitter<string>();

  constructor() {
  }

  addTodo(newTodo) {
    this.newTodo.emit(newTodo);
    console.log(newTodo);
  }


  ngOnInit() {
  }

}

