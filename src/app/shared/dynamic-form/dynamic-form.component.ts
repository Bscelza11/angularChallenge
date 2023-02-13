import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '../form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: any[] = [];
  myform!: FormGroup;

  constructor(private formService: FormControlService) {}

  ngOnInit() {
    this.myform = this.formService.formGroup(this.controls);
  }

  onSubmit() {}
}
