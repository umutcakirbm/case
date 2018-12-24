import {Component} from "@angular/core";

@Component({
  selector: 'app-footer',
  template: `
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Migros Case Shop 2018</p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  constructor() {}
}
