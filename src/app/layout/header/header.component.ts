import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('collapseRef') collapseElement: ElementRef;

  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onCollapse() {
    this.collapsed = !this.collapsed;
    if(this.collapsed){
      this.collapseElement.nativeElement.className = 'collapse navbar-collapse';
    }else{
      this.collapseElement.nativeElement.className = '';
    }
  }

}
