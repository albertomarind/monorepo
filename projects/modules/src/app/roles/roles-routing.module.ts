import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RolesComponent} from "./roles/roles.component";

const routes:Routes = [
  {
    path:'',
    component:RolesComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RolesRoutingModule { }
