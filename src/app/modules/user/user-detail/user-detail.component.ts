import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IcardUser} from '@components/cards/card-user/icard-user.metadata';
import {USERS_DATA} from '@data/constants/user.const';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public id: number;
  public users: IcardUser[] = USERS_DATA;
  public currentUser: IcardUser;

  constructor(
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    this.currentUser = this.users.find(user => user.id === +this.id);
    console.log(this.currentUser);
  }

  ngOnInit(): void {
  }

}
