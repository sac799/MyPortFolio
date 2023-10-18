import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  workExperience = [
    {
      company: 'Birlasoft',
      position: 'Software Developer',
      date: 'Nov 2021 - Sept 2022',
      description: [
        "Designed and developed sophisticated modules using event sourcing and projection architecture with RabbitMQ and Elasticsearch for clients.",
        " Crafted engaging front-end experiences using Angular 13, NgRx, Bootstrap, and Material UI.",
        " Created Micro-Services using Dot Net Core to use on the frontend with Angular components.",
        " Crafted detailed functional specifications to precisely define the requirements.",
        " Played a pivotal role in bug fixing and issue resolution, ensuring the stability and reliability of critical applications in a fast-paced working environment.",
        " Contributed to the growth of the team by actively participating in the hiring process, interviewing potential candidates for career opportunities within the organization."
      ]
    },
    {
      company: 'Total Synergy Concepts',
      position: 'Software Developer',
      date: 'Aug 2020 - Aug 2021',
      description: [
        "Provided a scalable solution for universities to send SMS from the TEAMS application via mobile phones (Android app).",
        " Worked on the integration of payment gateway.",
        " Developed Web API to communicate with the google messaging services and prepared technical documentation (MS Office)for Software Engineers."
      ]
    },
    {
      company: 'Zensar Technologies',
      position: 'Software Engineer',
      date: 'Oct 2019 - Feb 2020',
      description: [
        "Provide continued support, maintenance, monitoring and enhancements to existing systems to ensure that services are always consistently available and meet the evolving needs of the Business.",
        " Offered technical support to stakeholders/ user requirements and provided solutions to technical issues."
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
