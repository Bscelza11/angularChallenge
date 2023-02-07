import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegister = new FormGroup({
    email: new FormControl(''),
    userName: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    private authenticationService: authenticationService,
    private router: Router
  ) {}

  onSubmit() {
    if (
      this.formRegister.value.email != null &&
      this.formRegister.value.newPassword != null &&
      this.formRegister.value.userName != null
    ) {
      this.authenticationService.sendName(this.formRegister.value.userName);
      this.router.navigate(['/profile']);
      console.log(this.formRegister);
    } else {
      console.log('Error');
    }
  }
}
