import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authenticationService } from 'src/app/core/authentication.service';
import { passwordValidators } from 'src/app/shared/passwordValidators.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      passwordValidators(),
      Validators.minLength(6),
    ]),
  });

  get user() {
    return this.loginForm.get('user')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  constructor(
    private router: Router,
    private authenticationService: authenticationService
  ) {}

  onSubmit() {
    if (
      this.loginForm.value.user != null &&
      this.loginForm.value.password != null
    ) {
      this.authenticationService.sendName(this.loginForm.value.user);
      this.router.navigate(['/profile']);
    } else {
      console.log('Error');
    }
  }
}
