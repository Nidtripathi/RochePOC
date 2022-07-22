import {TodoActionTypes} from '../shared/enum/todo-action-types.enum';
import {ActionParent} from '../actions/todo.actions';
import {Todo} from '../modals/Todo'

export const initialState:Todo[] =[
    {title:"Todo 1"},
    {title:"Todo 2"},
    {title:"Todo 3"},
    {title:"Todo 4"},
    {title:"Todo 5"},
    {title:"Todo 6"},
    {title:"Todo 7"}
]


export function TodoReducer (state=initialState,action:ActionParent|any){
    switch(action.type){
        case TodoActionTypes.Add:
            return [...state,action.payload]
        case TodoActionTypes.Remove:
            return [
            ...state.slice(0,action.payload),
            ...state.slice(action.payload+1)
        ]
             
        default:
            return state;
    }
}