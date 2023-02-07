import { Component, OnDestroy, OnInit } from '@angular/core';
import { authenticationService } from 'src/app/core/authentication.service';
import { cardItem } from 'src/app/shared/cardItem.model';
import { ServiceHomeService } from './home-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  name: any;
  adItem: cardItem[] = [];

  constructor(
    private authenticationService: authenticationService,
    private serviceHome: ServiceHomeService
  ) {}

  ngOnInit(): void {
    this.adItem = this.serviceHome.getAds();
    this.authenticationService.getNameUser().subscribe((data) => {
      this.name = data;
    });
  }

  ngOnDestroy(): void {}
}
