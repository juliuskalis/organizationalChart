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
      this.setBodyId('pc');
      localStorage.setItem('device', 'pc');
    } else {
      this.setBodyId('phone');
      localStorage.setItem('device', 'phone');
    }
    this.router.navigate(['/chart']);
  }

  setBodyId(val: string) {
    let body = document.getElementsByTagName('body').item(0);
    if (body) {
      body.setAttribute('id', val);
    }
  }

}
