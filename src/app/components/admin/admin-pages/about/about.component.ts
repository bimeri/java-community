import { Component } from '@angular/core';
import {TranslatePipe} from "../../../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
