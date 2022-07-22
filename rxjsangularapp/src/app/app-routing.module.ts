import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { DrapDropComponent } from './components/drap-drop/drap-drop.component';
import { TodoComponent } from './components/todo/todo.component';


const routes: Routes = [
  
  {path:'',redirectTo: "todos",pathMatch:'full'},
  {path:"todos",component:TodoComponent},
  {path:"compare",component:ComparePageComponent},
  {path:"dragdrop",component:DrapDropComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
