import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'settings',
  component: SettingsComponent
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
