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
      title: 'Snowy mountain',
      url: '/assets/mountain.jpeg'
    },
    {
      title: 'Biking',
      url: '/assets/biking.jpeg'
    },
    {
      title: 'Earrings',
      url: '/assets/chitenge01.jpg'
    },
    {
      title: 'Pouch',
      url: '/assets/chitenge02.jpg'
    },
    {
      title: 'Sun flowers',
      url: '/assets/himawari.jpg'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 3;
  }
}
