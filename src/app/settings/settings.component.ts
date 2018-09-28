import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  ring = 100;
  media = 60;
  alarm = 80;
  enable = true;
  message = true;
  birthdays = true;
  tags = true;
  numpad = '';
  numpadSettings: any = {
    template: 'dddd',
    allowLeadingZero: true,
    placeholder: '-',
    mask: '*',
    validate: function (event) {
      return {
        invalid: event.values.length !== 4
      };
    }
  };

}
