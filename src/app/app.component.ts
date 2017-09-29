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
  }


  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }

  deleteSelectedTodos() {
    for (let x = (this.todoList.length - 1); x > -1; x--) {
      if (this.todoList[x].check) {
        this.todoList.splice(x, 1);
      }
    }
  }
}

