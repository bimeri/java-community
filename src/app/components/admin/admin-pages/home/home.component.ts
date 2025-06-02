import { Component } from '@angular/core';
import {TranslatePipe} from "../../../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
