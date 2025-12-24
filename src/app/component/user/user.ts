import { Component, computed, input, output } from '@angular/core';
import { UserType } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserType>();
  select = output<string>();
  selected = input.required<boolean>();

  imagePath = computed(() => {
    return 'users/' + this.user().avatar;
  });

  onSelectUser(){   
    this.select.emit(this.user().id);
  }
}
