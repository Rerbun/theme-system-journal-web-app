import { Component, OnInit } from '@angular/core';
import { TrackableItem } from '../trackable-item';

@Component({
  selector: 'app-trackable-items',
  templateUrl: './trackable-items.component.html',
  styleUrls: ['./trackable-items.component.css']
})
export class TrackableItemsComponent implements OnInit {

  dayLabels: string[];
  trackableItems: TrackableItem[];

  constructor() {
    this.trackableItems = [ { text: "Test", bullets: [0, 0.5, 1]}]
   }

  ngOnInit() {
  }

}
