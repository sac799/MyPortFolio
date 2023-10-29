import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  roles = [
    {
      title: 'Software Developer(Backend)',
      description:
        'A highly skilled software developer with expertise in various programming languages and frameworks. Experienced in creating web and mobile applications, solving complex problems, and collaborating in a team environment.',
      image: 'assets/web-dev.jpg',
      techSkills: [
        { name: 'MVC' },
        { name: 'C#' },
        { name: 'ASP.Net Core' },
        { name: 'SQL' },
        { name: 'No-SQL' },
        { name: 'Elastic Search' },
        { name: 'RabbitMQ' },
        { name: 'Entity Framework Core' },
        { name: 'LINQ' },
        { name: 'Microservices ' },
        { name: 'Web APIs' },
        { name: 'Unit Testing' },
      ],
    },
    {
      title: 'Software Developer(Frontend)',
      description:
        'A highly skilled software developer with expertise in various programming languages and frameworks. Experienced in creating web and mobile applications, solving complex problems, and collaborating in a team environment.',
      image: 'assets/web-dev.jpg',
      techSkills: [
        { name: 'Angular' },
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'jQuery' },
        { name: 'TypeScript' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Bootstrap UI' },
        { name: 'Tailwind CSS' },
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
        { name: 'Power BI' },
        { name: 'Tableau' },
      ],
    },
    {
      title: 'EXTRACURRICULAR',
      description:
        'Extracurricular activities refer to any organized or informal pursuits that students engage in outside of their regular academic curriculum. These activities provide students with opportunities to explore their interests, develop new skills, and broaden their horizons. ',
      image: 'assets/ec.jpg',
      techSkills: [
        { name: 'Student Ambassador at Manchester Metropolitan University' },
        { name: 'CO-Facilitator at Science & Engineering Club' },
        { name: 'Finalist at Smart India Hackathon, 2017 Ogranised by Government of India' },
        { name: 'Welcome Representative at Manchester Metropolitan University' }
      ],
    }
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
