import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-info-box',
  templateUrl: './launch-info-box.component.html',
  styleUrls: ['./launch-info-box.component.css']
})
export class LaunchInfoBoxComponent implements OnInit {

  @Input() name;
  @Input() imageURL;
  @Input() net;
  @Input() familyname;
  @Input() rocket_name;
  @Input() wiki_url;
  @Input() gMapLat
  @Input() gMapLng;
  @Input() pad_name;
  @Input() pad_wiki_url;
  @Input() location_name;
  @Input() agency_name;
  @Input() ageny_infoURL;
  @Input() agency_wikiURL;
  @Input() mission_description;

  constructor() { }

  ngOnInit() {
  }

}
