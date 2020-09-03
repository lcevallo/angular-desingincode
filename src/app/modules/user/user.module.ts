import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import {SharedModule} from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
