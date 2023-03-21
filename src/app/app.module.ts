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
import { PostCardComponent } from './shared/card-templates/post-card/post-card.component';
import { ProductCardComponent } from './shared/card-templates/product-card/product-card.component';
import { QuoteCardComponent } from './shared/card-templates/quote-card/quote-card.component';
import { GalleryComponent } from './features/home/gallery/gallery.component';
import { ServiceHomeService } from './features/home/home-service.service';
import { HomeComponent } from './features/home/home.component';
import { CardHostDirective } from './shared/cardHost.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RandomMessagePipe,
    PostCardComponent,
    ProductCardComponent,
    QuoteCardComponent,
    GalleryComponent,
    HomeComponent,
    CardHostDirective,
  ],
  exports: [RandomMessagePipe],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [authenticationService, ServiceHomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
