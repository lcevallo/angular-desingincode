import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-ngclass',
  templateUrl: './default-ngclass.component.html',
  styleUrls: ['./default-ngclass.component.scss']
})
export class DefaultNgclassComponent implements OnInit {

  public cards: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }[] = [
    {
      title: 'Tarjeta Principal',
      isPrimary:true,
      isDisabled: false,
      body:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi illum aut odio sunt quas, distinctio earum minima sapiente quia mollitia quasi repellat alias commodi, recusandae animi soluta at architecto libero?
      Amet nesciunt error expedita ad esse nobis ratione mollitia sunt voluptatibus ullam ipsum laudantium, aspernatur aliquid repellat repellendus doloremque accusantium perferendis sapiente delectus corporis obcaecati culpa debitis. Illo, recusandae quaerat?`
    },
    {
      title: 'Tarjeta Secundaria',
      isPrimary:false,
      isDisabled: false
    },
    {
      title: 'Tarjeta Desactivada',
      isPrimary:true,
      isDisabled: true
    }
  ]

  public classStyle = ['dsc-card', 'dsc-card-primary']

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(card: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }){
    card.isPrimary=!card.isPrimary;
  }


  disabledCard(card: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }){
    card.isDisabled =! card.isDisabled;
  }

}
