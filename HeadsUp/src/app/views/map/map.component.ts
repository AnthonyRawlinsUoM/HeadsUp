import {Component, ElementRef, OnInit} from '@angular/core';
import {D3Service, D3, Selection} from 'd3-ng2-service';
import {GeoJsonconsumerService} from "../../services/geo-jsonconsumer.service";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW50aG9ueXJhd2xpbnN1b20iLCJhIjoiY2o1dm81NTIwMDN6MTJxbjlvOHBiNHdlOSJ9.lt8I4sU0ceA6N8Tnnmx2ig';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: mapboxgl.Map;

  private data: any = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [142.05924289298517, -34.9673083718941]},
      "properties": {
        "Id": 1658907,
        "Name": "HEALY RD",
        "State": "VIC",
        "Appliances": 5,
        "Size": 0.0,
        "RadarVolume": 0.0,
        "RadarId": "14",
        "RadarUpdated": "2017-11-23T00:20:02",
        "LastReported_LocalTime": "2017-11-23T09:38:00",
        "LastReported_UTc": "2017-11-22T22:38:00Z",
        "LastUpdated_UTC": "2017-11-23T09:38:00+11:00"
      }
    }, {
      "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [147.0753, -37.0399]},
      "properties": {
        "Id": 1658906,
        "Name": "HOTHAM HEIGHT - DARGO ROAD",
        "State": "VIC",
        "Appliances": 2,
        "Size": 2.0,
        "RadarVolume": 0.0,
        "RadarId": "51",
        "RadarUpdated": "2017-11-23T00:20:02",
        "LastReported_LocalTime": "2017-11-23T09:07:00",
        "LastReported_UTc": "2017-11-22T22:07:00Z",
        "LastUpdated_UTC": "2017-11-23T09:07:00+11:00"
      }
    }, {
      "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [142.26856420271119, -37.511283637581968]},
      "properties": {
        "Id": 1658917,
        "Name": "No Name",
        "State": "VIC",
        "Appliances": 2,
        "Size": 0.0,
        "RadarVolume": 0.0,
        "RadarId": "51",
        "RadarUpdated": "2017-11-23T00:20:02",
        "LastReported_LocalTime": "2017-11-23T11:09:00",
        "LastReported_UTc": "2017-11-23T00:09:00Z",
        "LastUpdated_UTC": "2017-11-23T11:09:00+11:00"
      }
    }, {
      "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [145.6428, -37.9749]},
      "properties": {
        "Id": 1658763,
        "Name": "GEMBROOK-BURGESS ROAD",
        "State": "VIC",
        "Appliances": 25,
        "Size": 23.0,
        "RadarVolume": 0.0,
        "RadarId": "51",
        "RadarUpdated": "2017-11-23T00:20:02",
        "LastReported_LocalTime": "2017-11-22T14:42:00",
        "LastReported_UTc": "2017-11-22T03:42:00Z",
        "LastUpdated_UTC": "2017-11-22T14:42:00+11:00"
      }
    }]
  };

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service, private geojson_service: GeoJsonconsumerService) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }


  ngOnInit() {
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>;
    this.map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/anthonyrawlinsuom/cjabwsmll01vg2sk66hjw5o3r',
      center: [132.133333, -23.116667],
      pitch: 25,
      zoom: 4,
    });

    let map = this.map;
    let data = this.data;

    map.on('load', function () {

      map.addSource('active_fire_feed', {
        type: 'geojson',
        data: data
      });

      map.loadImage('/assets/fireicon.png', function (error, image) {
        if (error) throw error;
        map.addImage('flame', image);
      });

      // this.data = this.geojson_service.getJSON('FIRE/GoingFires.geojson');

      map.addLayer({
        "id": "ActiveFires",
        "type": "symbol",
        "source": "active_fire_feed",
        "layout": {
          "icon-image": "flame",
          "icon-size": 0.025,
        }
      });

      map.addLayer({
        id: 'heat',
        source: 'active_fire_feed',
        type: 'heatmap',
        paint: {
          "heatmap-radius": 40,
          "heatmap-color": {
            "stops": [
              [0.0, "black"],
              [0.25, "red"],
              [0.5, "orange"],
              [0.75, "yellow"],
              [1.0, "white"],

            ]
          },
          "heatmap-weight": {
            "type": "identity",
            "property": "point_count"
          }
        }
      });

    });


    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement);


    }
  }


}
