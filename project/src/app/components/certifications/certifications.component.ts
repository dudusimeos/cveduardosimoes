import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'JavasScript Basic for Beginners',
      issuer: 'Udemy',
      date: '11/2024',
      logo: '🌐'
    },
    {
      title: 'Gestão de Pessoas e Marketing',
      issuer: 'Faculdade Venda Nova do Imigrante - FAVENI',
      date: '08/2024',
      logo: '☁️'
    },
    {
      title: 'HTML5 e CSS3: Técnicas Avançadas (Com Flexbox e 5 Projetos)',
      issuer: 'Udemy',
      date: '08/2024',
      logo: '💻'
    },
    {
      title: 'SOLID Principles: Introducing Software Architecture & Design ',
      issuer: 'Udemy',
      date: '08/2024',
      logo: '💻'
    },
    {
      title: 'Domine a Arquitetura Limpa e Hexagonal ',
      issuer: 'Udemy',
      date: '10/2024',
      logo: '💻'
    }
  ];
}
