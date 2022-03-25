import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-device-check',
  templateUrl: './device-check.component.html',
  styleUrls: ['./device-check.component.scss']
})
export class DeviceCheckComponent {

  constructor(private router: Router) { }

  selectDevice(val: string) {
    if (val === 'pc') {
      this.setHTMLId('pc');
      localStorage.setItem('device', 'pc');
    } else {
      this.setHTMLId('phone');
      localStorage.setItem('device', 'phone');
    }
    this.router.navigate(['/chart']);
  }

  setHTMLId(val: string) {
    let html = document.getElementsByTagName('html').item(0);
    if (html) {
      html.setAttribute('id', val);
    }
  }

}
