import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent }, // About page route
  {
    path: 'todos',
    loadComponent: () =>
      import('./todos/todos.component').then((m) => m.TodosComponent),
  },
];
