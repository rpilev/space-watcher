import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DropdownComponent } from './ui-elements/dropdown/dropdown.component';
import { LaunchesService } from './launches.service';
import { HttpClientModule } from '@angular/common/http';
import { LaunchInfoBoxComponent } from './ui-elements/launch-info-box/launch-info-box.component';

import { AgmCoreModule } from '@agm/core';
import { LatestLaunchesComponent } from './latest-launches/latest-launches.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    LaunchInfoBoxComponent,
    LatestLaunchesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgzbCqtuayoECn4UZk27LDKv6BjAHFJVQ'
    }),
    AppRoutingModule
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
