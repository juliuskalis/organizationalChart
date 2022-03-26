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
      document.getElementsByTagName('html').item(0)?.setAttribute('id', 'pc');
      localStorage.setItem('device', 'pc');
    } else {
      document.getElementsByTagName('html').item(0)?.setAttribute('id', 'phone');
      localStorage.setItem('device', 'phone');
    }
    this.router.navigate(['/chart']);
  }

}
