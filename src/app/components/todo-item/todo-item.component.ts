import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import {Todo } from "../../models/Todo"
import {TodoService} from "../../services/todo.service"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo ; 
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService :TodoService) { }

  ngOnInit(): void {
  }

  //setDynamicClasses
  setClasses(){
    let classes = {
      todo : true , 
      'is-complete' : this.todo.completed
    }
    return classes
  }

  //toggle 
  onToggle(todo : Todo) : void {
    //toggle in ui 
    todo.completed = !todo.completed
    //toggle server 
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }
  //toggle 
  onDelete(todo : Todo) : void {
    this.deleteTodo.emit(todo)
  }

}
