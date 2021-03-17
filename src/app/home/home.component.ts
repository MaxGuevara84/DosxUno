import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  iconsData = [
    {description:'Supermarkets', icon: 'assets/img/custom/shopping-cart.png'},
    {description:'Electronics', icon: 'assets/img/custom/monitor.png'},
    {description:'DIY', icon: 'assets/img/custom/tools.png'},
    {description:'Home', icon: 'assets/img/custom/home.png'},
    {description:'Fashion', icon: 'assets/img/custom/clothes-hanger.png'},
    {description:'Cars', icon: 'assets/img/custom/steering-wheel.png'},
    {description:'Travels', icon: 'assets/img/custom/airplane.png'},
    {description:'Sports', icon: 'assets/img/custom/basketball-ball.png'},
    {description:'Optics', icon: 'assets/img/custom/glasses.png'},
    {description:'Drugstore', icon: 'assets/img/custom/fragance.png'},
    {description:'Toys', icon: 'assets/img/custom/rompecabezas.png'},
    {description:'Health', icon: 'assets/img/custom/first-aid-kit.png'},
    {description:'Books', icon: 'assets/img/custom/book.png'},
    {description:'Banks', icon: 'assets/img/custom/debit-card.png'},
    {description:'Restoration', icon: 'assets/img/custom/silverware.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
