import { Component, Input, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  contact = {
    name:'',
    email: '',
    message:'',
  };
  notificationMessage: string = ''; 

  constructor() { }

 
  ngOnInit(): void {
  }
  
 
}
