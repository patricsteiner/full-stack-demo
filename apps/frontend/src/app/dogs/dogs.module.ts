import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsComponent } from './dogs.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogComponent } from './dog/dog.component';

@NgModule({
  declarations: [
    DogsComponent,
    DogFormComponent,
    DogsListComponent,
    DogComponent,
  ],
  imports: [CommonModule, DogsRoutingModule, ReactiveFormsModule],
})
export class DogsModule {}
