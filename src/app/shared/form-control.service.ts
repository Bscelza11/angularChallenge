import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  public myform: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  formGroup(control: any) {
    control.forEach((control: any) => {
      this.myform.addControl(control.name, this.fb.control(control.value));
    });

    return this.myform;
  }
}
