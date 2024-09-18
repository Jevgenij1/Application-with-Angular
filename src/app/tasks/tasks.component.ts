import { Component, Input } from '@angular/core';
import { User, Task } from '../utils/types';
import { TASKS } from '../utils/tasks.data';
import { TaskComponent } from './task/task.component';
import { TaskModalComponent } from './task-modal/task-modal.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() user: User = {
    id: '',
    firstName: '',
    lastName: '',
    userAvatar: '',
  };
  userTask: Task[] = TASKS;
  showAddTaskModal: boolean = false;

  get selectedUserTasks() {
    return this.userTask.filter((task) => task.userId === this.user.id);
  }

  addTask() {
    this.showAddTaskModal = true;
  }

  onCompleteTask(id: string) {
    this.userTask = this.userTask.filter((task) => task.id !== id);
  }

  onModalClose(isClose: boolean) {
    this.showAddTaskModal = isClose;
  }
}
