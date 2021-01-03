import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualityItemComponent } from './actuality-item/actuality-item.component';

const routes: Routes = [
  { path: 'actuality', component: ActualityItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
