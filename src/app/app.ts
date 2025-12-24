import { Component, computed, signal } from '@angular/core';
import { Header } from "./component/header/header";
import { User } from "./component/user/user";
import { DUMMY_USERS } from './class/dummy-users';
import { Task } from "./component/task/task";

@Component({
  selector: 'app-root',
  imports: [Header, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  protected readonly title = signal('starting-project');
  selectedUserid = signal<string | null>(null);
  selectedUser = computed(() => {
    return this.users.find(user => user.id === this.selectedUserid())!;
  });

  onUserSelected(userId: string) {
    this.selectedUserid.set(userId);
  }
}
