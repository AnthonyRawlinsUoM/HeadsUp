import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlumesComponent } from './views/plumes/plumes.component';
import { MapComponent } from './views/map/map.component';
import { GaugeComponent } from './views/gauge/gauge.component';


@NgModule({
  declarations: [
    AppComponent,
    PlumesComponent,
    MapComponent,
    GaugeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
