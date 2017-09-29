import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {
  work: string;
  @Output() newTodo = new EventEmitter<any>();

  constructor() {
  }

  typing() {

  }

  addTodo(newTodo) {
    this.newTodo.emit({
      name: newTodo,
      check: false
    });
    this.work = '';
  }


  ngOnInit() {
  }

}

