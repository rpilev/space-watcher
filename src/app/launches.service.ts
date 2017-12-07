import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LaunchesService {

  constructor(private httpClient: HttpClient) { }

  launchListChanged = new Subject<any>();
  launchList;

  getLatestLaunches() {
    this.httpClient.get('https://launchlibrary.net/1.3/launch?next=5&mode=verbose')
      .subscribe( data => {
        this.launchList = data['launches'];
        this.launchList = this.resizeRocketImages(this.launchList, 0);
        this.launchListChanged.next(this.launchList.slice());
      })
  }

  getLaunchByDateRage(start, end) {
    this.httpClient.get(`https://launchlibrary.net/1.3/launch/${start}/${end}`)
      .subscribe( data => {
        this.launchList = data['launches'];
        this.launchList = this.resizeRocketImages(this.launchList, 0);
        this.launchListChanged.next(this.launchList.slice());
      })
  }

  resizeRocketImages(launches, size) {
    let imgURL = '';
    let start = 0;
    let end = 0;
    let newSize = 0;
    for(let i=0;i<launches.length;i++){
      imgURL = launches[i].rocket.imageURL;
      start = imgURL.lastIndexOf('_') + 1;
      end = imgURL.lastIndexOf('.');
      newSize = launches[i].rocket.imageSizes[size];

      imgURL = imgURL.substr(0, start) + imgURL.substr(end, imgURL.length);
      start = imgURL.lastIndexOf('_') + 1;
      end = imgURL.lastIndexOf('.');
      imgURL = imgURL.substr(0, start) + newSize + imgURL.substr(end, imgURL.length); 
      launches[i].rocket.imageURL = imgURL;
    }

    return launches;
  }

}
