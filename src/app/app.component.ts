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
    console.log(this.todoList);

  }
}

