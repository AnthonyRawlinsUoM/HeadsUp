import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fires',
  templateUrl: './fires.component.html',
  styleUrls: ['./fires.component.css']
})
export class FiresComponent implements OnInit {

  heading = "Active Fires"

  active_fires:any = [{
    since: 'datetimestamp',
    location: 'Location A',
    category: 'Controlled'

  }, {
    since: 'datetimestamp',
    location: 'Location B',
    category: 'Active'
  },]

  constructor() { }

  ngOnInit() {
  }

}
