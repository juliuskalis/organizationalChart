import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-part-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() value: boolean | undefined;
}

