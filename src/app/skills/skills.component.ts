import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  roles = [
    {
      title: 'Software Developer',
      description:
        'A highly skilled software developer with expertise in various programming languages and frameworks. Experienced in creating web and mobile applications, solving complex problems, and collaborating in a team environment.',
      image: 'assets/web-dev.jpg',
      techSkills: [
        { name: 'MVC' },
        { name: 'C#' },
        { name: '.Net Core' },
        { name: 'Angular' },
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'HTML4' },
        { name: 'CSS3' },
        { name: 'SQL' },
        { name: 'No-SQL' },
        { name: 'Entity Framework' },
        { name: 'Microservices ' },
        { name: 'Web APIs' },
        { name: 'Web APIs' },
      ],
    },
    {
      title: 'Data Scientist/Analyst',
      description:
        'A data scientist/analyst with a strong background in data analysis, machine learning, and statistical modeling. Skilled in extracting valuable insights from data, making data-driven decisions, and communicating findings to stakeholders.',
      image: 'assets/data-science.jpg',
      techSkills: [
        { name: 'Python' },
        { name: 'R' },
        { name: 'SQL' },
        { name: 'No-SQL' },
        { name: 'Statistics' },
        { name: 'Machine Learning' },
        { name: 'Scikit-Learn' },
        { name: 'NumPy' },
        { name: 'Pandas' },
        { name: 'MatplotLib' },
        { name: 'NLP (Natural Language Proessing)' },
        { name: 'Computer Vision' },
        { name: 'Tensorflow' },
        { name: 'Pytorch' },
        { name: 'PySpark' },
        { name: 'Text Processing' },
        { name: 'Image Processing' },
        { name: 'Power BI' },
        { name: 'Tableau' },
      ],
    },
  ];

  constructor() {}

  isModalVisible = false;
  selectedRole: any;
  ngOnInit(): void {}

  showModal = false;

  openModal(experience: any) {
    this.selectedRole = experience;
    this.showModal = true;
  }

  closeModal() {
    this.selectedRole = null;
    this.showModal = false;
  }
}
