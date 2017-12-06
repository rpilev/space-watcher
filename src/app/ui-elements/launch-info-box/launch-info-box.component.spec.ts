import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchInfoBoxComponent } from './launch-info-box.component';

describe('LaunchInfoBoxComponent', () => {
  let component: LaunchInfoBoxComponent;
  let fixture: ComponentFixture<LaunchInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
