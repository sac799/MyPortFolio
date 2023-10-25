import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experienceImages: string[] = [
    'assets/sw1.jpg',
    'assets/sw2.jpg',
    'assets/sw3.jpg',
    'assets/exp.jpg',
    // Add more image paths here
  ];
  workExperience = [
    {
      company: 'Birlasoft',
      position: 'Software Developer',
      date: 'Nov 2021 - Sept 2022',
      description: [
        "In my role, I undertook a wide range of responsibilities, all geared towards delivering innovative and efficient solutions for our clients. I designed and developed intricate modules, leveraging event sourcing and projection architecture, and implemented technologies such as RabbitMQ and Elasticsearch to ensure optimal performance. Additionally, I focused on crafting engaging front-end experiences, skillfully utilizing Angular 13, NgRx, Bootstrap, and Material UI to create visually appealing and user-friendly interfaces. My expertise extended to the creation of Micro-Services using Dot Net Core, seamlessly integrating them with Angular components on the front-end. I also played a vital role in establishing clear functional specifications to precisely define project requirements, contributing to the success of our endeavors. In addition to these development tasks, I demonstrated my commitment by resolving bugs and issues, upholding the stability and reliability of critical applications in a dynamic work environment. My dedication to the team's growth was evident in my active involvement in the hiring process, where I conducted interviews to identify potential candidates who could thrive in career opportunities within the organization."
      ],
      tech: 'C#, .Net Core, MVC, WEB API, Microservices, RabbitMQ, Angular, NgRX, JavaScript, TypeScript, Entity Framework, SQL Server, LINQ'
    },
    {
      company: 'Total Synergy Concepts',
      position: 'Software Developer',
      date: 'Aug 2020 - Aug 2021',
      description: [
        "During my tenure, I embarked on a multifaceted role that encompassed several key responsibilities. Notably, I designed and implemented a scalable solution tailored for universities. This solution enabled the seamless transmission of SMS messages from the TEAMS application to mobile phones, an innovative and practical approach that significantly improved communication. I was also actively involved in integrating a payment gateway, which facilitated secure and efficient transactions. My contributions extended to the development of a robust Web API, which served as a vital link in connecting with Google messaging services. Additionally, I prepared comprehensive technical documentation using MS Office, ensuring that my fellow software engineers had access to essential resources and guidelines. In sum, my role revolved around enhancing communication, facilitating secure transactions, and providing valuable technical support to my team, all of which contributed to the success and efficiency of our projects."
      ],
      tech:'C#, ASP.Net, MVC, WEB API, Android, React Native, ReactJS, SQL Server, Entity Framework, LINQ'
    },
    {
      company: 'Zensar Technologies',
      position: 'Software Engineer',
      date: 'Oct 2019 - Feb 2020',
      description: [
        "In my role, I was dedicated to providing unwavering support, maintenance, and vigilant monitoring of existing systems to guarantee the uninterrupted availability of services. I consistently strived to meet the ever-evolving demands of the business, ensuring that our systems remained robust and reliable. Moreover, I played a pivotal role in offering essential technical support, acting as a bridge between stakeholders and their requirements, and actively addressing any technical issues that arose. By delivering innovative solutions, I contributed to the seamless operation of the systems and the satisfaction of our stakeholders, making a substantial impact on the organization's overall performance."
      ],
      tech:'C#, ASP.Net, MVC, WEB API, SQL Server, SSIS'
    },
    {
      company: 'EXFO ',
      position: 'Software Engineer',
      date: 'Jul 2018 - Jun 2019',
      description: [
        "During my tenure, I had the opportunity to work extensively with ASP.Net and JavaScript, utilizing various libraries and tools like DevExpress to develop web applications. This involved writing and optimizing SQL queries, including the creation of stored procedures, functions, and triggers, to facilitate seamless database operations. In addition, I actively collaborated with cross-functional teams to build interactive dashboards that provided real-time data insights. These dashboards were developed with a strong focus on optimization, leveraging techniques such as stored procedures and functions to ensure efficient and responsive data retrieval. This experience not only honed my technical skills but also sharpened my ability to work harmoniously within a team to achieve our collective goals."
      ],
      tech:'C#, ASP.Net, MVC, HTML5, CSS3, DevExpress, JavaScript, Bootstrap, SQL Server, Stored Procedures, Functions'
    }
  ];

  ngOnInit(): void {
  }
  selectedExperience: any;

  constructor() {}

 showModal = false; // Indicates whether the modal should be shown

  openModal(experience: any) {
    this.selectedExperience = experience; // Store the selected experience
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.selectedExperience = null; // Clear the selected experience
    this.showModal = false; // Hide the modal
  }

}
