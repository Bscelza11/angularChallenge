import { Component, Input } from '@angular/core';
import { AdComponent } from '../../ad.component';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent implements AdComponent {
  @Input() data: any;
}
