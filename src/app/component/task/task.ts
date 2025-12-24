import { Component, computed, input, signal } from '@angular/core';
import { Detail } from './detail/detail';
import { Add } from "./add/add";
import { NewTask } from './detail/task.model';

@Component({
  selector: 'app-task',
  imports: [Detail, Add],
  templateUrl: './task.html',
  styleUrls: ['./task.css'],
})
export class Task {
  name = input<string>();
  userId = input<string | null>();
  isAddingTask = signal(false);

  tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Finish Angular Training',
      summary: 'Complete the Angular training modules and exercises.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Prepare Presentation',
      summary: 'Create slides and practice for the upcoming presentation.',
      dueDate: '2025-11-15'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Review Code',
      summary: 'Go through the codebase and review for improvements.',
      dueDate: '2025-10-10'
    }
  ]);

  selectedUserTasks = computed(() => {
    return this.tasks().filter(task => task.userId === this.userId());
  }); 

  onCompleteTask(taskId: string) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(taskData: NewTask) {
    this.tasks.update(tasks => [
      ...tasks,
      {
        id: `t${tasks.length + 1}`,
        userId: this.userId()!,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate
      }
    ]);
    this.isAddingTask.set(false);
  }
}
