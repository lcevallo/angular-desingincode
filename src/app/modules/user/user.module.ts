import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import {SharedModule} from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { DefaultNgclassComponent } from './default-ngclass/default-ngclass.component';
import { UserListOnInitComponent } from './user-list-on-init/user-list-on-init.component';


@NgModule({
  declarations: [UserListComponent, UserDetailComponent, DefaultUserComponent, DefaultNgclassComponent, UserListOnInitComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
