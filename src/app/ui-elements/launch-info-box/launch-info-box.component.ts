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

  constructor() { }

  ngOnInit() {
  }

}
