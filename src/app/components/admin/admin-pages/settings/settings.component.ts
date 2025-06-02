import { Component } from '@angular/core';
import {TranslatePipe} from "../../../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
