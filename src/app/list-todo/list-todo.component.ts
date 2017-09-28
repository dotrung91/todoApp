import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  @Input() todoReceive: string;
  todoList = [];
  constructor() { }

  ngOnInit() {
  }


}
