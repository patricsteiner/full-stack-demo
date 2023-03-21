import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DogsService } from './dogs.service';

@Component({
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsComponent {
  dogs$ = this.dogsService.findAll();

  constructor(private readonly dogsService: DogsService) {}
}
