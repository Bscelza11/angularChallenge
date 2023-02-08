import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdDataCard } from 'src/app/shared/adData.component';
import { CardHostDirective } from 'src/app/shared/cardHost.directive';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  @Input() adCards: any;

  @ViewChild(CardHostDirective, { static: true }) adHost!: CardHostDirective;

  constructor() {}

  ngOnInit(): void {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdDataCard>(
      this.adCards.component
    );
    componentRef.instance.data = this.adCards.data;

    console.log(this.adCards.data);
  }
}
