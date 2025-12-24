import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../detail/task.model';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  cancel = output<void>();
  add = output<NewTask>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    });
  }
}
