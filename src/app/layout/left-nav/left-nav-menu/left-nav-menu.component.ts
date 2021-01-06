import { Component, OnInit, Input } from '@angular/core';
import { IleftNavMenu } from '@data/interfaces/ui/ileft-nav-menu.metadata';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.scss']
})
export class LeftNavMenuComponent implements OnInit {

@Input() data: IleftNavMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
