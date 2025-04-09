import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  date: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Moveit NextJs',
      description: 'Application made during the NLW04 week together with rocketseat.',
      date: '09/2022',
      technologies: ['Typescript', 'CSS']
    },
    {
      title: 'CandyShop',
      description: 'This project was made during the course "HTML5 e CSS3: Técnicas Avançadas',
      date: '08/2024',
      technologies: ['CSS', 'HTML']
    },
    {
      title: 'Websitehost',
      description: 'This project was made during the course "HTML5 e CSS3: Técnicas Avançadas',
      date: '08/2024',
      technologies: ['CSS', 'HTML']
    }
  ];
}
