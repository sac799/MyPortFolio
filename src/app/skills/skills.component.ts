import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills = [
    { id: 1, name: 'C#' },
    { id: 2, name: 'MVC' },
    { id: 3, name: '.Net Core' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'React' },
    { id: 6, name: 'JavaScript' },
    { id: 7, name: 'HTML' },
    { id: 8, name: 'CSS' },
    { id: 9, name: 'SQL' },
    { id: 10, name: 'Entity Framework' },
  ];
  roles = [
    {
      title: 'Software Developer',
      description:
        'A highly skilled software developer with expertise in various programming languages and frameworks. Experienced in creating web and mobile applications, solving complex problems, and collaborating in a team environment.',
      image: 'assets/web-dev.jpg',
      techSkills: 'C#, JavaScript, Angular, React, Node.js, etc.',
    },
    {
      title: 'Data Scientist/Analyst',
      description:
        'A data scientist/analyst with a strong background in data analysis, machine learning, and statistical modeling. Skilled in extracting valuable insights from data, making data-driven decisions, and communicating findings to stakeholders.',
      image: 'assets/data-science.jpg',
      techSkills: 'C#, JavaScript, Angular, React, Node.js, etc.',
    },
  ];
  cSharpProficiency: number = 90;
  cSharp: string = 'C#';
  angular: string = 'Angular';
  angularPercentage: number = 75;
  constructor() {}

  ngOnInit(): void {}
}
