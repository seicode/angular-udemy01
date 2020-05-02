import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentPage = 0;
  images = [
    {
      title: 'Tree on a hill',
      url: '/assets/tree.jpeg'
    },
    {
      title: 'Mountain',
      url: '/assets/mountain.jpeg'
    },
    {
      title: 'Biking',
      url: '/assets/biking.jpeg'
    }
  ];

  getClass() {
    const classes = [];
  }
}
