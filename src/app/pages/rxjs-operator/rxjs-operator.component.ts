import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-operator',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.scss'
})
export class RxjsOperatorComponent {
    protected title = 'RxJS Operator';
    test = "id-test";

   get  titleMethod() {
     this.titleM = 'RxJS Operator';
      return this.title;
    }

    set  titleM(title: string) {
      this.title =  title;
    }
}
