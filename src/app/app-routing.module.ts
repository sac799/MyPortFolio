import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },     // Default route, maps to AppComponent
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
