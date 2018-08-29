import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  now: Date = new Date();

  firstName = 'Angelica';
  lastName = 'Geary';
  email = 'angelica.geary@gmail.com';
  password = '';

  selectedLang = 'en';
  langData = [
    { value: 'de', text: 'Deutsch' },
    { value: 'en', text: 'English' },
    { value: 'es', text: 'Español' },
    { value: 'fr', text: 'Français' },
    { value: 'it', text: 'Italiano' }
  ];

  date = new Date(1987, 2, 25);
  dateSettings: any = {
    max: new Date(this.now.getFullYear() - 18, 11, 31)
  };
  segmented = 'female';
}
