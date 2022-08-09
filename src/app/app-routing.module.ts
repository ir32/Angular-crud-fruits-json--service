import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruits/home/home.component';
import { CreateComponent } from "./fruits/create/create.component";
import { EditComponent } from "./fruits/edit/edit.component";

const routes: Routes = [
  {path: '',redirectTo: 'fruits/home', pathMatch: 'full',},

  {path:'fruits/home', component:HomeComponent},
  {path:'fruits/create', component:CreateComponent},
  {path:'fruits/edit/:id',component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
