import {Component, EventEmitter, Input, Output, ViewChild} from "@angular/core";

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="javascript:;">Migros Case Shop</a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <div class="ml-auto">
            <div id="productCountBox" [hidden]="differentProductCount === 0">
              Sepetinizde <a href="javascript:;" (click)="navigateToBox($event)"><strong>{{ differentProductCount }}</strong> farklı ürün</a> bulunmaktadır.
            </div>
            <div id="noProductCountBox" [hidden]="differentProductCount > 0">
              Sepetinizde henüz ürün yok.
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-collapse > div > div { color: #fff; }
    .navbar-collapse > div > div a { color: #fff; text-decoration: underline;}
  `]
})
export class NavigationComponent {

  @Input() differentProductCount: number = 0;
  @Output() navigateToBoxEvent: EventEmitter<any>;

  constructor() {
    this.navigateToBoxEvent = new EventEmitter<any>();
  }

  navigateToBox($event) {
    this.navigateToBoxEvent.emit($event);
  }

}
