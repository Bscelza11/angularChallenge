import { Component, OnInit } from '@angular/core';
import { ServiceHomeService } from './home-service.service';
import { CardItem } from 'src/app/shared/cardItem.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  adCards: CardItem[] = [];

  constructor(private serviceHome: ServiceHomeService) {}

  ngOnInit(): void {
    this.adCards = this.serviceHome.getAds();
  }
}
