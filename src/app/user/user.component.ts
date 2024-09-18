import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../utils/types';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user: User = {
    id: '',
    firstName: '',
    lastName: '',
    userAvatar: '',
  };
  @Input() isUserSelected: boolean = false;
  @Output() select = new EventEmitter<string | number>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
