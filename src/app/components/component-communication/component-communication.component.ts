import {Component, signal} from '@angular/core';
import {FirstChildComponent} from "./first-child/first-child.component";
import {SecondChildComponent} from "./second-child/second-child.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TranslatePipe} from "../../pipes/translation/translate.pipe";

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
  firstMessage = signal<string>('');
  secondMessage = '';
  bothMessage = '';

  firstChildReply = '';
  secondChildReply = '';

  messageFromFirstChild(event: string) {
    this.firstChildReply = event;
  }

  messageFromSecondChild(event: string) {
    this.secondChildReply = event;
  }
}
