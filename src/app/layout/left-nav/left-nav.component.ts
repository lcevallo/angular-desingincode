import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IleftNavMenu } from '@data/interfaces/ui/ileft-nav-menu.metadata';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public name= 'Gabriel Cevallos';
  public position = 'Gerente';
  public avatar = 'assets/images/defaults/avatarIkki.jpg';
  public logo = 'assets/images/defaults/logo.jpg';
  public menus: IleftNavMenu[] = LEFT_NAV_MENUS;




  constructor() { }

  ngOnInit(): void {
  }

}
