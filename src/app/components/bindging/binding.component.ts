import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TranslatePipe} from "../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  title: string = 'Angular Bindings';
  name: string = 'Java Community';
  imageUrl: string = 'https://commondatastorage.googleapis.com/codeskulptor-assets/space%20station.png';
  isDisabled: boolean = true;
  count: number = 0;
  twoWayText: string = '';
  classes = 'border rounded p-2 w-full mb-2  bg-gray-200';

  incrementCount() {
    this.count++;
  }
}
