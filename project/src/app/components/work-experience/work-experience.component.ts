import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Tax Technology Associate',
      company: 'PwC Brasil',
      period: 'May 2024 - Present',
      description: 'I work on developing web interfaces using Angular, optimizing the design and usability of the company´s internal software, with a focus on automating tax processes.',
      skills: ['Git', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Typescript']
    },
    {
      title: 'Robotics Intern',
      company: 'Colégio Antônio Vieira',
      period: 'Oct 2022 - Dec 2023',
      description: 'Responsible for the planning, organization, and execution of Robotics and Maker projects and classes for students in grades 1 to 9. Focused on fostering creativity and critical thinking skills in children through hands-on learning experiences.',
      skills: ['Leadership', 'Automation', 'Excel']
    },
    {
      title: 'Frontend Developer',
      company: 'StreamSpell',
      period: 'Jun 2021 - Jul 2022',
      description: 'Developing and programming "events" on the StreamLabs platform using HTML, CSS, and JavaScript. Collaborating with the design team to analyze the feasibility and implementation of these events, ensuring alignment with project goals and user experience standards.',
      skills: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Data Analyst',
      company: 'Praxis - Empresa Jr.',
      period: 'Mar 2019 - Jul 2020',
      description: 'Developing and implementing strategies for the company´s sector and social media presence. Analyzing and monitoring data generated from social networks to optimize engagement and performance. Additionally, overseeing the planning and execution of Google Analytics and Facebook Ads campaigns to drive targeted marketing efforts.',
      skills: ['Facebook Ads', 'Data Analysis', 'Google Analytics']
    },
    {
      title: 'Frontend Developer',
      company: 'Praxis - Empresa Jr.',
      period: 'Mar 2019 - Jun 2020',
      description: 'Responsible for managing the initial customer service and briefing process. Developed layouts using design software, which were submitted to clients for review and approval. Led the production of websites utilizing HTML, CSS, JavaScript, and PHP, ensuring both functionality and alignment with client expectations.',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Figma', 'Bootstrap', 'Git']
    }
  ];
}
