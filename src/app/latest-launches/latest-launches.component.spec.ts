import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestLaunchesComponent } from './latest-launches.component';

describe('LatestLaunchesComponent', () => {
  let component: LatestLaunchesComponent;
  let fixture: ComponentFixture<LatestLaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestLaunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
