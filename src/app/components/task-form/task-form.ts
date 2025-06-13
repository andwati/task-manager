import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
    }),

    status: new FormControl('Todo', {
      nonNullable: true,
    }),
  });

  onSubmit() {
    console.log('Form Submitted!', this.taskForm.value);
    this.taskForm.reset();
  }
}
