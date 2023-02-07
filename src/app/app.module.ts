import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RandomMessagePipe } from './shared/random-message.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { authenticationService } from './core/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RandomMessagePipe,
  ],
  exports: [RandomMessagePipe],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [authenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
