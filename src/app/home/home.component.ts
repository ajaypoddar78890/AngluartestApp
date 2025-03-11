import { Component } from '@angular/core';
import { GreeterComponent } from '../componants/greeter/greeter.component';

@Component({
  selector: 'app-home',
  imports: [GreeterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
