import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AgmCoreModule } from '@agm/core';

import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { PlumesComponent } from './views/plumes/plumes.component';
import { MapComponent } from './views/map/map.component';
import { GaugeComponent } from './views/gauge/gauge.component';
import { MenusystemComponent } from './views/menusystem/menusystem.component';
import { FiresComponent } from './views/fires/fires.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToolsetComponent } from './views/toolset/toolset.component';
import { SearchComponent } from './views/search/search.component';
import { StatsComponent } from './views/stats/stats.component';
import { Viewer3DComponent } from './views/viewer3d/viewer3d.component';
import { GooglemapComponent } from './views/googlemap/googlemap.component';
// import { google } from '@agm/core/services/google-maps-types';


@NgModule({
  declarations: [
    AppComponent,
    PlumesComponent,
    MapComponent,
    GaugeComponent,
    MenusystemComponent,
    FiresComponent,
    DashboardComponent,
    ToolsetComponent,
    SearchComponent,
    StatsComponent,
    Viewer3DComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCKc1o8qtfpkWMFUYkmyXpmx_CMYW1A8tQ'})
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
