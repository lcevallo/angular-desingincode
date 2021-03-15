import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from '@modules/user/user-list/user-list.component';
import {UserDetailComponent} from '@modules/user/user-detail/user-detail.component';
import {DefaultUserComponent} from '@modules/user/default-user/default-user.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultUserComponent
  },
  {
    path: ':id',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
