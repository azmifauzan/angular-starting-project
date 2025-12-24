import { Component, input, output } from '@angular/core';
import { Task } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.html',
  styleUrls: ['./detail.css'],
  imports: [Card, DatePipe],
})
export class Detail {
  task = input.required<Task>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
