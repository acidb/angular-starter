import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    now:Date = new Date();
    currentNav = 'home';
    id = 4;

    // Home

    calendar: Date = this.now;
    data = [{
        id: 1,
        todo: "Do the laundry",
        checked: true
    }, {
        id: 2,
        todo: "Don't forget mom's birthday!",
        checked: true
    }, {
        id: 3,
        todo: "Buy new shoes"
    }, {
        id: 4,
        todo: "Need ketchup for pizza"
    }];

    listviewSettings = {
        sortable: {
            handle: 'left'
        },
        stages: {
            left: [{
                key: 'stage1',
                icon: 'plus',
                color: '#31c6e7',
                text: 'Add',
                action: (event) => {
                    this.data.push({
                        id: ++this.id,
                        todo: "New Todo"
                    });
                }
            }],
            right: [{
                key: 'stage2',
                color: '#009688',
                text: 'Remove',
                icon: 'remove',
                action: (event) => {
                    let item = this.data.find(i => i.id == event.target.getAttribute('data-id'));
                    this.data.splice(this.data.indexOf(item), 1);
                    return false;
                }
            }]
        }
    };

    // Settings

    ring = 100;
    media = 60;
    alarm = 80;
    enable = true;
    message = true;
    birthdays = true;
    tags = true;
    numpad: string = "";
    numpadSettings: any = {
        template: 'dddd',
        allowLeadingZero: true,
        placeholder: '-',
        mask: '*',
        validate: function (event) {
            return {
                invalid: event.values.length != 4
            };
        }
    }

    // Profile
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
    }
    segmented = 'female';
}
