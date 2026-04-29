import {Component, signal} from '@angular/core';
import {FirstChildComponent} from "./first-child/first-child.component";
import {SecondChildComponent} from "./second-child/second-child.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TranslatePipe} from "../../pipes/translation/translate.pipe";
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
type ResolveType<T> = T extends Promise<infer U> ? U : never;
async function fetchData() {
  return {data: "some data"};
}
type FetchDataType = ResolveType<ReturnType<typeof fetchData>>;

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [
    FirstChildComponent,
    SecondChildComponent,
    FormsModule,
    NgIf,
    TranslatePipe
  ],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.scss'
})
export class ComponentCommunicationComponent {
  private me: Partial<User> =  {};
  firstMessage = signal<string>('');
  secondMessage = '';
  bothMessage = '';

  firstChildReply = '';
  secondChildReply = '';

  messageFromFirstChild(event: string) {
    this.firstChildReply = event;
    this.me.email = event;
  }

  messageFromSecondChild(event: string) {
    this.secondChildReply = event;
  }
}
