import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <app-navigation
      [differentProductCount]="1"
      (navigateToBoxEvent)="navigateTo('products/box')">
    </app-navigation>
    <app-wrapper>
      <router-outlet></router-outlet>
    </app-wrapper>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  productsOnBox$: any;

  constructor(
    private router: Router
  ) {}

  navigateTo(path) {
    this.router.navigate([path]).then();
  }
}
