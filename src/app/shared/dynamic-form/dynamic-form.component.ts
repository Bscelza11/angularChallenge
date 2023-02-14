import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlsModel } from '../controlBase';
import { FormControlService } from '../form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() jsonFormData: ControlsModel | undefined;
  myform!: FormGroup;

  constructor(private formService: FormControlService) {}

  ngOnInit() {
    if (this.jsonFormData?.controls) {
      this.myform = this.formService.createForm(this.jsonFormData.controls);
    }
  }

  onSubmit(values: any) {
    console.log(values);
  }
}
