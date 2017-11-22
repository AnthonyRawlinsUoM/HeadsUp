import { Component, ElementRef, OnInit } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW50aG9ueXJhd2xpbnN1b20iLCJhIjoiY2o1dm81NTIwMDN6MTJxbjlvOHBiNHdlOSJ9.lt8I4sU0ceA6N8Tnnmx2ig';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: mapboxgl.Map;

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }


  ngOnInit() {
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>;
    this.map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v9'
    });
    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement);


    }
  }

}
