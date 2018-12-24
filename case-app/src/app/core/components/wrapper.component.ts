import {Component} from "@angular/core";

@Component({
  selector: 'app-wrapper',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `
})
export class WrapperComponent {
  constructor() {}
}
