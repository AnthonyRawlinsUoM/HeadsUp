import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { PlumesComponent } from './views/plumes/plumes.component';
import { MapComponent } from './views/map/map.component';
import { GaugeComponent } from './views/gauge/gauge.component';
import { MenusystemComponent } from './views/menusystem/menusystem.component';
import { FiresComponent } from './views/fires/fires.component';


@NgModule({
  declarations: [
    AppComponent,
    PlumesComponent,
    MapComponent,
    GaugeComponent,
    MenusystemComponent,
    FiresComponent
  ],
  imports: [
    BrowserModule,
    SuiModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
