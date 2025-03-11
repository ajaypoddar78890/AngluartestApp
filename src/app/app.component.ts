import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componants/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
