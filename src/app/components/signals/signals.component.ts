import {Component, computed, effect, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TranslatePipe} from "../../pipes/translation/translate.pipe";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  count = signal(0);
  customValue = 0;

  // Computed signals
  doubleCount = computed(() => this.count() * 2);
  isEven = computed(() => this.count() % 2 === 0);

  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  increment() {
    this.count.update(c => c + 1);
  }

  decrement() {
    this.count.update(c => c - 1);
  }

  reset() {
    this.count.set(0);
  }

  setCustom() {
    this.count.set(Number(this.customValue));
  }

  double() {
    this.count.update(c => c * 2);
  }
}
