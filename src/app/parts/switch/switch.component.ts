import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-part-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  @Input() value: boolean | undefined;
  @Output() valueEvent = new EventEmitter<boolean>();

  toggleValue(): void {
    this.value = !this.value;
    this.valueEvent.emit(this.value);
  }

}

