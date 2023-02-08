import { Component, Input } from '@angular/core';
import { AdDataCard } from '../../adData.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements AdDataCard {
  @Input() data: any;
}
