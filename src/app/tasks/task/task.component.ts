import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../utils/types';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  };
  @Output() complete = new EventEmitter<string>();

  onTaskComplete() {
    this.complete.emit(this.task.id);
  }
}
