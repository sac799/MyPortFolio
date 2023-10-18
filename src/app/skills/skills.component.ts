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
    { id: 10, name: 'Entity Framework' }
  ];
  cSharpProficiency: number = 90;
  cSharp: string ="C#";
  angular: string ="Angular";
  angularPercentage: number = 75;
  constructor() {}

  ngOnInit(): void {}
}
