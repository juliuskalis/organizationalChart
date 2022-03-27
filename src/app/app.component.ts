import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      document.getElementsByTagName('html').item(0)?.setAttribute('id', 'phone');
    } else {
      document.getElementsByTagName('html').item(0)?.setAttribute('id', 'pc');
    }
  }
}
