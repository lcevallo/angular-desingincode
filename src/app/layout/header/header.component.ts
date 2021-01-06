import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showMenu = new EventEmitter<any>();
public faBars = faBars;
public faBell = faBell;
public faComment = faComment;
public avatar = 'assets/images/defaults/avatarIkki.jpg';
public logo = 'assets/images/defaults/logo.jpg';

  constructor() { }

  ngOnInit(): void {
  }

/*   descargarReporte() {
    this..generarReporte().susbcribe(
      data => {
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none');
        document.body.appendChild(a);
        a.href = url;
        a.download = 'ordenDepago.pdf';
        a.click();
      }
    );
  } */

}
