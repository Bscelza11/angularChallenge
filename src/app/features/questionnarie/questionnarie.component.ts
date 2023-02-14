import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnarie',
  templateUrl: './questionnarie.component.html',
  styleUrls: ['./questionnarie.component.css'],
})
export class QuestionnarieComponent implements OnInit {
  userControls: any;
  addressControls: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('/assets/questionnarie/user-details.json')
      .subscribe((formData: any) => {
        this.userControls = formData;
      });

    this.http
      .get('/assets/questionnarie/user-adress.json')
      .subscribe((formData: any) => {
        this.addressControls = formData;
      });
  }
}
