import { Component } from '@angular/core';
import { MbscDatetimeOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  now = new Date();

  firstName = 'Angelica';
  lastName = 'Geary';
  email = 'angelica.geary@gmail.com';
  password: string;

  selectedLang = 'en';
  langData = [{
    value: 'de',
    text: 'Deutsch'
  }, {
    value: 'en',
    text: 'English'
  }, {
    value: 'es',
    text: 'Español'
  }, {
    value: 'fr',
    text: 'Français'
  }, {
    value: 'it',
    text: 'Italiano'
  }];

  date = new Date(1987, 2, 25);
  dateSettings: MbscDatetimeOptions = {
    max: new Date(this.now.getFullYear() - 18, 11, 31)
  };
  segmented = 'female';
}
