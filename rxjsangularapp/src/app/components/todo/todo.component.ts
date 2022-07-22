import { Component, OnInit } from '@angular/core';
import {Todo} from '../../modals/Todo';
import { Observable } from 'rxjs';
import {select,Store} from '@ngrx/store'
import {TodoRemove} from '../../actions/todo.actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

   todos:Observable<Todo[]>;

  constructor(private store:Store<{todos:Todo[]}>,private router: Router) { 
    this.todos=store.pipe(select('todos'))
    console.log(this.todos)
  }
  removeTodo(i:number){
    this.store.dispatch(new TodoRemove(i))
  }

  ngOnInit(): void {
  }
}
