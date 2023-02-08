import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdComponent } from 'src/app/shared/Ad.component';
import { AdDirective } from 'src/app/features/home/Ad.directive';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  @Input() adCards: any;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  constructor() {}

  ngOnInit(): void {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      this.adCards.component
    );
    componentRef.instance.data = this.adCards.data;

    console.log(this.adCards.data);
  }
}
