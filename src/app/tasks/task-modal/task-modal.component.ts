import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, User } from '../../utils/types';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss',
})
export class TaskModalComponent {
  @Input() user: User = {
    id: '',
    firstName: '',
    lastName: '',
    userAvatar: '',
  };
  @Output() close = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Task>();

  constructor(private fb: FormBuilder) {}

  taskFrom = this.fb.group({
    taskTitle: ['', Validators.required],
    taskSummary: ['', Validators.required],
    taskDueDate: ['', Validators.required],
  });

  onAddTask() {
    this.close.emit(false);
  }

  onModalClose() {
    this.close.emit(false);
  }
}
