import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslatePipe} from "../../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.scss'
})
export class SecondChildComponent {
  protected secondChild = "Second Child";
  protected message = "";
  @Input() secondMessage = "";
  @Input() generalMessage = "";
  @Output() replyParent: EventEmitter<string> = new EventEmitter<string>();

  replyParentComponent() {
    this.replyParent.emit(this.message);
  }
}
