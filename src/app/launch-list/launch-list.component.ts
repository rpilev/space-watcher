import { Component, OnInit } from '@angular/core';
import { LaunchListService } from './launch-list.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  constructor(private launchListService: LaunchListService) { }

  latestLaunches;

  ngOnInit() {
    this.launchListService.launchListChanged
      .subscribe( launches => {
        
        launches = this.resizeRocketImages(launches, 0);

        this.latestLaunches = launches;
        console.log(this.latestLaunches);
      })

    this.launchListService.getLatestLaunches();
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
