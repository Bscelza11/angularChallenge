import { Component, Input } from '@angular/core';
import { AdDataCard } from '../../adData.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements AdDataCard {
  @Input() data: any;
}
