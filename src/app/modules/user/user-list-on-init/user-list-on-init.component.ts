import { Component, OnInit } from '@angular/core';
import {IcarouselItem} from '@components/carousel/icarousel-item.metadata';
import {CAROUSEL_DATA_ITEMS} from '@data/constants/carousel.const';
import {IcardUser} from '@components/cards/card-user/icard-user.metadata';
import {UserService} from '@data/services/api/user.service';

@Component({
  selector: 'app-user-list-on-init',
  templateUrl: './user-list-on-init.component.html',
  styleUrls: ['./user-list-on-init.component.scss']
})
export class UserListOnInitComponent implements OnInit {

  public carouselData: IcarouselItem[]; // = CAROUSEL_DATA_ITEMS;
  public users: IcardUser[] ; // = []
  public title: string;
  public userSubscription;

  // public $sUser: UserService;

  /**
   * El constructor solo debe de definir variables
   * @param userService
   */

  constructor(
    private $sUser: UserService
  ) {

    this.carouselData = CAROUSEL_DATA_ITEMS;
    // this.users = [];
    this.title = 'Esto es un titulo';



  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
   this.userSubscription = this.$sUser
       .getAllUsers()
       .subscribe(r => this.users = (r.error) ? [] : r.data );
    }
}
