import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 65, label: 'Reviews' }
  ];
  items = [
    {
      images: 'assets/couch.jpeg',
      title: 'Couch',
      description: 'Factastic couch'
    },
    {
      images: 'assets/dresser.jpeg',
      title: 'Dresser',
      description: 'Great dresser'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
