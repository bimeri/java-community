import { Component } from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle, UpperCasePipe} from "@angular/common";
import {HeaderDirective} from "../../directives/header.directive";
import {SearchBarComponent} from "../resources/search-bar/search-bar.component";
import {TranslatePipe} from "../../pipes/translation/translate.pipe";
import {CustomDatePipe} from "../../pipes/date/custom-date.pipe";

@Component({
  selector: 'app-directive-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    NgIf,
    NgForOf,
    HeaderDirective,
    NgStyle,
    NgClass,
    SearchBarComponent,
    TranslatePipe,
    CustomDatePipe
  ],
  templateUrl: './directive-pipe.component.html',
  styleUrl: './directive-pipe.component.scss'
})
export class DirectivePipeComponent {
  showList = true;

  items = ['Angular', 'React', 'Vue'];

  today = new Date();

  message = 'hello angular';

  price = 1234.56;

  isStyled = false;

  changeDate() {
    this.today = new Date();
  }


}
