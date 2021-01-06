import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IcardUser} from '@components/cards/card-user/icard-user.metadata';
import {USERS_DATA} from '@data/constants/user.const';
import { UserService } from '@data/services/api/user.service';

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
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.id = +this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.userService.getUserById(this.id)
      .subscribe( r => {
                        if (!r.error) {
                                        this.currentUser = r.data;
                                    }
                        }
                );
  }

}
