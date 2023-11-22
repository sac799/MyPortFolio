import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AcademicProjectsComponent } from './academic-projects/academic-projects.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { EcommComponent } from './ecomm/ecomm.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route, maps to AppComponent
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'academic-projects', component: AcademicProjectsComponent },
  { path: 'other-projects', component: OtherProjectsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'ecomm', component: EcommComponent },
  { path: 'ecomm/product-detail/:id', component: ProductDetailComponent },
  { path: 'ecomm/cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
