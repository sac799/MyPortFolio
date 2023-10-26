import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {

  blogCards = [
    {
      imageSrc: 'assets/angular.png',
      author: 'Sachin Patil',
      date: 'Oct. 18, 2023',
      tags: ['Learn', 'Code', 'Angular', 'TypeScript', 'HTML', 'CSS'],
      title: 'Creating a New Angular App',
      subTitle: 'Create your first angular app',
      content:
        'Angular is a powerful and popular open-source web application framework that allows developers to build dynamic and interactive web applications. In this blog, we will walk you through the process of creating a new Angular app.',
      link: 'https://medium.com/@sacpatil799/creating-a-new-angular-app-ae4c034fb075',
    },
    {
      imageSrc: 'assets/github-image.png',
      author: 'Sachin Patil',
      date: 'Oct. 26, 2023',
      tags: ['Learn', 'GitHub', 'Deployment', 'GitHub Pages'],
      title: 'Deploying Your Angular App on GitHub Pages for Free',
      subTitle: 'Deploy your angular app for free with the help of GitHub pages.',
      content:
        'If you’ve developed an Angular application and are looking for a simple and cost-effective way to share it with the world, GitHub Pages is an excellent choice.',
      link: 'https://medium.com/@sacpatil799/deploying-your-angular-app-on-github-pages-for-free-df3368b282b8',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
