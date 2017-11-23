import { Component, OnInit } from '@angular/core';
import { GeoJsonconsumerService} from "../../services/geo-jsonconsumer.service";
import { AgmMap, AgmMarker} from "@agm/core";

@Component({
  selector: 'app-fires',
  templateUrl: './fires.component.html',
  styleUrls: ['./fires.component.css']
})
export class FiresComponent implements OnInit {

  heading = "Active Fires"

  active_fires:any = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[142.05924289298517,-34.9673083718941]},"properties":{"Id":1658907,"Name":"HEALY RD","State":"VIC","Appliances":5,"Size":0.0,"RadarVolume":0.0,"RadarId":"14","RadarUpdated":"2017-11-23T00:20:02","LastReported_LocalTime":"2017-11-23T09:38:00","LastReported_UTc":"2017-11-22T22:38:00Z","LastUpdated_UTC":"2017-11-23T09:38:00+11:00"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[147.0753,-37.0399]},"properties":{"Id":1658906,"Name":"HOTHAM HEIGHT - DARGO ROAD","State":"VIC","Appliances":2,"Size":2.0,"RadarVolume":0.0,"RadarId":"51","RadarUpdated":"2017-11-23T00:20:02","LastReported_LocalTime":"2017-11-23T09:07:00","LastReported_UTc":"2017-11-22T22:07:00Z","LastUpdated_UTC":"2017-11-23T09:07:00+11:00"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[142.26856420271119,-37.511283637581968]},"properties":{"Id":1658917,"Name":"No Name","State":"VIC","Appliances":2,"Size":0.0,"RadarVolume":0.0,"RadarId":"51","RadarUpdated":"2017-11-23T00:20:02","LastReported_LocalTime":"2017-11-23T11:09:00","LastReported_UTc":"2017-11-23T00:09:00Z","LastUpdated_UTC":"2017-11-23T11:09:00+11:00"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[145.6428,-37.9749]},"properties":{"Id":1658763,"Name":"GEMBROOK-BURGESS ROAD","State":"VIC","Appliances":25,"Size":23.0,"RadarVolume":0.0,"RadarId":"51","RadarUpdated":"2017-11-23T00:20:02","LastReported_LocalTime":"2017-11-22T14:42:00","LastReported_UTc":"2017-11-22T03:42:00Z","LastUpdated_UTC":"2017-11-22T14:42:00+11:00"}}]}

  constructor(private api: GeoJsonconsumerService) {

  }

  ngOnInit() {
    // this.api.getJSON("/FIRE/GoingFires.geojson").subscribe(m => this.active_fires = m);
    // TODO - Sorting by time, state etc..
  }

}
