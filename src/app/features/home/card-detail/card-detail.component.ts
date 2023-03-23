import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CardItem } from 'src/app/shared/cardItem.model';
import { ServiceHomeService } from '../home-service.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  cardItem!: CardItem;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private serviceHome: ServiceHomeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.cardItem = this.serviceHome.getCard(this.id);
      console.log(this.cardItem);
    });
  }
}
