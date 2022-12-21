import { Component } from '@angular/core';

@Component({
  selector: 'app-measure-form',
  templateUrl: './measure-form.component.html',
  styleUrls: ['./measure-form.component.css']
})
export class MeasureFormComponent {
  height: number;
  distance: number;

  onHeightChange(e: Event) {
    this.height = parseFloat((e.target as HTMLInputElement).value);
  }

  onDistanceChange(e: Event) {
    this.distance = parseFloat((e.target as HTMLInputElement).value);
  }
}
