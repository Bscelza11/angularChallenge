import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlBaseModel } from './controlBase';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  constructor(private fb: FormBuilder) {}

  createForm(controls: ControlBaseModel[]) {
    let form: FormGroup = this.fb.group({});
    for (const control of controls) {
      form.addControl(control.name, this.fb.control(control.value));
    }

    return form;
  }
}
