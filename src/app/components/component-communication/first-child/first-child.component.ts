import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslatePipe} from "../../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.scss'
})
export class FirstChildComponent {
protected firstChild = "First Child";
protected message = "";
@Input() firstMessage = "";
@Input() generalMessage = "";
@Output() replyParent: EventEmitter<string> = new EventEmitter<string>();

  replyParentComponent() {
    this.replyParent.emit(this.message);
  }
}
