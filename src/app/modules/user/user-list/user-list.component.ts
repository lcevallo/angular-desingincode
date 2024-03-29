import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IcardUser} from '@components/cards/card-user/icard-user.metadata';
import {USERS_DATA} from '@data/constants/user.const';
import {UserService} from '@data/services/api/user.service';
import { IcarouselItem } from '@shared/components/carousel/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit, OnInit {


  public carouselData: IcarouselItem[] = CAROUSEL_DATA_ITEMS;

  public users: IcardUser[] ;

  constructor(
    private userService: UserService
  ) {


    this.userService.getAllUsers().
    subscribe(
      r => {
        if (!r.error) {
          this.users = r.data;
        }
      }
    );


  }

  ngAfterViewInit(): void {

    }

  ngOnInit(): void {

  }

}
