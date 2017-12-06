import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LaunchListService {

  constructor(private httpClient: HttpClient) { }

  launchListChanged = new Subject<any>();
  launchList;

  getLatestLaunches() {
    this.httpClient.get('https://launchlibrary.net/1.3/launch?next=5&mode=verbose')
      .subscribe( data => {
        this.launchList = data['launches'];
        this.launchListChanged.next(this.launchList.slice());
      })
  }

}
