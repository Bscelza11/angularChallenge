import { Component, Input } from '@angular/core';
import { AdComponent } from '../../ad.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements AdComponent {
  @Input() data: any;
}
