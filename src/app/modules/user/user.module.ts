import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import {SharedModule} from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DefaultUserComponent } from './default-user/default-user.component';


@NgModule({
  declarations: [UserListComponent, UserDetailComponent, DefaultUserComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
