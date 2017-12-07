import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dateStart;
  dateEnd;
  launches;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.launchListChanged.subscribe(
      launches => {
        this.launches = launches;
      }
    )
  }

  onSearch() {
    if(String(this.dateStart.day).length == 1){
      this.dateStart.day = "0" + this.dateStart.day;
    }
    if(String(this.dateStart.month).length == 1){
      this.dateStart.month = "0" + this.dateStart.month;
    }
    if(String(this.dateEnd.day).length == 1){
      this.dateEnd.day = "0" + this.dateEnd.day;
    }
    if(String(this.dateEnd.month).length == 1){
      this.dateEnd.month = "0" + this.dateEnd.month;
    }
    this.dateStart = this.dateStart.year + '-' + this.dateStart.month + '-' + this.dateStart.day;
    this.dateEnd = this.dateEnd.year + '-' + this.dateEnd.month + '-' + this.dateEnd.day;


    this.launchesService.getLaunchByDateRage(this.dateStart, this.dateEnd);
  }

}
