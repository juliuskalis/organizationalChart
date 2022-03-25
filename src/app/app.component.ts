import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const device = localStorage.getItem('device');
    if (device && device === 'pc') {
      this.setHTMLId('pc');
    } else {
      this.setHTMLId('phone');
    }
  }

  setHTMLId(val: string) {
    let html = document.getElementsByTagName('html').item(0);
    if (html) {
      html.setAttribute('id', val);
    }
  }
}
