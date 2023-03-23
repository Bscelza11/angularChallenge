import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './features/home/card-detail/card-detail.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { ProfileComponent } from './features/profile/profile.component';
import { QuestionnarieComponent } from './features/questionnarie/questionnarie.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'questionnrie', component: QuestionnarieComponent },
  { path: 'cards', component: HomeComponent },
  { path: 'cards/:id', component: CardDetailComponent },
  { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
