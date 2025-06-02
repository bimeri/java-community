import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf, NgStyle, UpperCasePipe} from "@angular/common";
import {HeaderDirective} from "../../directives/header.directive";
import {SearchBarComponent} from "../resources/search-bar/search-bar.component";
import {TranslatePipe} from "../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-directive-pipes',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    NgIf,
    NgForOf,
    HeaderDirective,
    NgStyle,
    NgClass,
    SearchBarComponent,
    TranslatePipe
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


}
