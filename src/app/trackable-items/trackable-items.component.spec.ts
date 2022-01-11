import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackableItemsComponent } from './trackable-items.component';

describe('TrackableItemsComponent', () => {
  let component: TrackableItemsComponent;
  let fixture: ComponentFixture<TrackableItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackableItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
