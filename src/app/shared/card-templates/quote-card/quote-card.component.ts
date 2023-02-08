import { Component, Input } from '@angular/core';
import { AdComponent } from '../../Ad.component';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent implements AdComponent {
  @Input() data: any;
}
