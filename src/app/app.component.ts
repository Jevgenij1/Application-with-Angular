import { Component } from '@angular/core';
import { USER_DATA } from './utils/user.data';
import { User } from './utils/types';
import { HeaderComponent, UserComponent, TasksComponent } from './index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: User[] = USER_DATA;
  userId: string | number = this.users[0].id;

  get selectedUser() {
    return this.users.find((user) => this.userId === user.id);
  }

  onSelectUser(id: string | number) {
    this.userId = id;
  }
}
