import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs.component';
import { DogComponent } from './dog/dog.component';

const routes: Routes = [
  {
    path: '',
    component: DogsComponent,
  },
  {
    path: ':id',
    component: DogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsRoutingModule {}
