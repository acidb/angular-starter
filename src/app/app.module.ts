import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app.routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    MbscModule.forRoot({ angularRouter: Router }),
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    JsonpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
