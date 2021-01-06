import { Component, OnInit } from '@angular/core';
import { faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faYoutube = faYoutube;
  public faTwitter = faTwitter;
  public faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }

}
