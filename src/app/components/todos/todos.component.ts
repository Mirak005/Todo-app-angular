import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from "../../models/Todo"
import {TodoService} from "../../services/todo.service"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[] ;  
  loading : boolean = true ; 

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.loading = true 
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos
     this.loading = false 
    })
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter((el:Todo) => el.id !== todo.id)
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(newTodo : Todo){
   
   this.todoService.addTodo(newTodo).subscribe((todo :Todo) =>{
     this.todos.unshift(todo)
    
   })

  }

}
