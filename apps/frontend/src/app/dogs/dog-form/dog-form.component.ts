import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dog } from '../dog.model';

@Component({
  selector: 'full-stack-demo-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogFormComponent implements OnInit {
  dogForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    breed: [''],
    imageUrl: ['', Validators.required],
  });

  @Input()
  dog?: Partial<Dog>;

  @Output()
  dogChange = new EventEmitter<Dog>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.dogForm.patchValue({ ...this.dog });
  }

  saveDog() {
    const dog = this.dogForm.getRawValue();
    this.dogChange.emit(dog as Dog);
  }
}
