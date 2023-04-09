import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Option } from '../model/option.model';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
})
export class ButtonToggleComponent {
  @Input()
  option!: Option;
  @Input()
  control: FormControl = new FormControl();
}