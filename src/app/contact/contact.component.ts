import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // Handle form submission logic here (e.g., sending data to a server)
    console.log('Form submitted with data:', this.formData);
  }
  formData: any = {
    fullName: '',
    email: '',
    message: ''
  };
  submitForm() {
    const emailData = {
      fullName: this.formData.fullName,
      email: this.formData.email,
      message: this.formData.message
    };
    // code for email logic
  }

}
