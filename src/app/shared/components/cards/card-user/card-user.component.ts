import {Component, Input, OnInit} from '@angular/core';
import {IcardUser} from '@components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() data: IcardUser;

  constructor() { }

  ngOnInit(): void {
  }

}
