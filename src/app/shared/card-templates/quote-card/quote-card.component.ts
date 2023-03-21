import { Component, Input } from '@angular/core';
import { AdDataCard } from '../../adData.component';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent implements AdDataCard {
  @Input() data: any;
}
