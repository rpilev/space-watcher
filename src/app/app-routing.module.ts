import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestLaunchesComponent } from './latest-launches/latest-launches.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LatestLaunchesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}