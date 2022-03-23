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
      this.setBodyId('pc');
    } else {
      this.setBodyId('phone');
    }
  }

  setBodyId(val: string) {
    let body = document.getElementsByTagName('body').item(0);
    if (body) {
      body.setAttribute('id', val);
    }
  }
}
