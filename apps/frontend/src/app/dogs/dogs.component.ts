import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsComponent {}
