import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DropdownComponent } from './ui-elements/dropdown/dropdown.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchListService } from './launch-list/launch-list.service';
import { HttpClientModule } from '@angular/common/http';
import { LaunchInfoBoxComponent } from './ui-elements/launch-info-box/launch-info-box.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownComponent,
    LaunchListComponent,
    LaunchInfoBoxComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgzbCqtuayoECn4UZk27LDKv6BjAHFJVQ'
    })
  ],
  providers: [LaunchListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
