import { Component, OnInit } from '@angular/core';
import {Todo} from '../../modals/Todo';
import { Store } from '@ngrx/store';
import {TodoAdd} from '../../actions/todo.actions'

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  constructor(private stroe:Store<{todos:Todo[]}>) { }
  
  AddTodo(todo:String){
    const newtodo=new Todo();
    newtodo.title=todo;
    this.stroe.dispatch(new TodoAdd(newtodo))
    }
  ngOnInit(): void {
  }

}


