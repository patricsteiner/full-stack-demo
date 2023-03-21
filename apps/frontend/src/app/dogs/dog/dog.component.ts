import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog.model';

@Component({
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogComponent {
  id$ = this.route.params.pipe(map((params) => params['id']));
  dog$ = this.id$.pipe(switchMap((id) => this.dogsService.find(id)), tap(console.log));

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dogsService: DogsService
  ) {}

  onDogChange(dog: Dog) {
    if (dog.id) {
      this.dogsService.update(dog.id, dog);
    } else {
      this.dogsService.create(dog);
    }
    this.router.navigate(["dogs"])
  }
}
