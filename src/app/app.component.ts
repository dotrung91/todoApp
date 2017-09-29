import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  todoList = [];

  pushTodo( event ) {
    this.todoList.push(event);
    console.log(event);
  }

  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }

  deleteSelectedTodos() {
    for (let i = (this.todoList.length - 1); i > -1; i--) {
      if (this.todoList [i]) {
        this.todoList.splice(i, 1);
      }
    }
  }
}

