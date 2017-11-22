import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})

export class GooglemapComponent implements OnInit {

  // google maps zoom level
  zoom: number = 5;

  // initial center position for the map
  lat: number = -32.2218159;
  lng: number = 144.0680825;

  constructor() { }

  ngOnInit() {
  }
}

