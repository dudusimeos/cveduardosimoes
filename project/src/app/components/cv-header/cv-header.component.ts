import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-header',
  standalone: true,
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.css']
})
export class CvHeaderComponent {
  profile = {
    name: 'Eduardo Simões',
    title: 'Junior Frontend Developer',
    email: 'dudusiemoes@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/eduardosimões/',
    github: 'https://github.com/dudusimeos',
    objective: 'To become a Technical Lead and mentor junior developers while staying at the forefront of web technologies.'
  };

  title = 'darkToggle';

  darkMode = false;

  constructor() {
    this.detectColorScheme();
  }

  detectColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
    }
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }

}
