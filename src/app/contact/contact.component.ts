import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formData: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // Handle form submission logic here (e.g., sending data to a server)
    console.log('Form submitted with data:', this.formData);
  }

}
