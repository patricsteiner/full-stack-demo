import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'dogs', pathMatch: 'full' },
  {
    path: 'dogs',
    loadChildren: () => import('./dogs/dogs.module').then((m) => m.DogsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
