import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskForm } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  imports: [TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'task-manager';
}
