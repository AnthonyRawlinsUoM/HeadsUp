import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  detections_24hrs = 34
  current_incidents = 28
  days_since_fire = 0
  active_appliances = 73

  constructor() { }

  ngOnInit() {
  }

}
