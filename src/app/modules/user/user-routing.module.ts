import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailComponent} from '@modules/user/user-detail/user-detail.component';
import {DefaultUserComponent} from '@modules/user/default-user/default-user.component';
import {DefaultNgclassComponent} from '@modules/user/default-ngclass/default-ngclass.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultNgclassComponent
  },
  {
    path: 'gStyle',
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
