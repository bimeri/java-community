import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search...';
  query: string = '';

}
