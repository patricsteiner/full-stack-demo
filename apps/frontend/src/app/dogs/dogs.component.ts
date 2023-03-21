import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { DogsService } from './dogs.service';
import { firstValueFrom, Subject, switchMap } from 'rxjs';
import { Dog } from './dog.model';

@Component({
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsComponent implements OnInit {
  private readonly loadDogs$ = new Subject<void>();

  readonly dogs$ = this.loadDogs$.pipe(
    switchMap(() => this.dogsService.findAll())
  );

  randomDogImage?: string = undefined;

  constructor(
    private readonly dogsService: DogsService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.loadDogs$.next();
    });
  }

  async findRandomDog() {
    this.randomDogImage = await firstValueFrom(
      this.dogsService.findRandomDogImageOnTheInternet()
    ).then((res) => res.imageUrl);
    this.cdr.detectChanges();
  }

  async save(dog: Dog) {
    await this.dogsService.create(dog);
    this.loadDogs$.next();
    this.randomDogImage = undefined;
  }
}
