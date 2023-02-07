import { Component, Input } from '@angular/core';
import { AdComponent } from '../../ad.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements AdComponent {
  @Input() data: any;
}
