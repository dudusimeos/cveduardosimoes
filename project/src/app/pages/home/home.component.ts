// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CvHeaderComponent } from '../../components/cv-header/cv-header.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { ProjectsComponent } from '../../components/projects/projetcs.component';
import { WorkExperienceComponent } from '../../components/work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CvHeaderComponent, CertificationsComponent, ProjectsComponent, WorkExperienceComponent],
  template: `
    <div class="container">
      <app-cv-header></app-cv-header>
      <app-work-experience></app-work-experience>
      <app-projects></app-projects>
      <app-certifications></app-certifications>
    </div>
  `
})
export class HomeComponent {}
