import { Component, signal } from '@angular/core';
import { Header } from "./component/header/header";
import { User } from "./component/user/user";

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('starting-project');
}
