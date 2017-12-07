import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'app-latest-launches',
  templateUrl: './latest-launches.component.html',
  styleUrls: ['./latest-launches.component.css']
})
export class LatestLaunchesComponent implements OnInit {

  constructor(private launchesService: LaunchesService) { }

  latestLaunches;

  ngOnInit() {
    this.launchesService.launchListChanged
      .subscribe( launches => {
        this.latestLaunches = launches;
      })

    this.launchesService.getLatestLaunches();
  }

}
