import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  now: Date = new Date();
  id = 4;
  calendar: Date = this.now;
  data = [{
    id: 1,
    todo: 'Do the laundry',
    checked: true
  }, {
    id: 2,
    todo: 'Don\'t forget mom\'s birthday!',
    checked: true
  }, {
    id: 3,
    todo: 'Buy new shoes'
  }, {
    id: 4,
    todo: 'Need ketchup for pizza'
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
            todo: 'New Todo'
          });
        }
      }],
      right: [{
        key: 'stage2',
        color: '#009688',
        text: 'Remove',
        icon: 'remove',
        action: (event) => {
          const item = this.data.find(i => i.id === event.target.getAttribute('data-id'));
          this.data.splice(this.data.indexOf(item), 1);
          return false;
        }
      }]
    }
  };

}
