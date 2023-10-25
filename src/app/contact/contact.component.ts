import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact = {
    phone: '+44 7586238369',
    email: 'sacpatil799@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sachin-patil-5019b7139/',
    github: 'https://github.com/sac799',
  };

  notificationMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  openLink(link: string) {
    // Open the provided link in a new tab
    window.open(link, '_blank');
  }
}
