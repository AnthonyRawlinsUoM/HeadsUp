import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgxGaugeModule } from 'ngx-gauge';

import { AgmCoreModule } from '@agm/core';

import { D3Service } from 'd3-ng2-service';
import { ApiconsumerService } from './services/apiconsumer.service';
import { GeoJsonconsumerService } from './services/geo-jsonconsumer.service';

import { AppComponent } from './app.component';
import { PlumesComponent } from './views/plumes/plumes.component';
import { MapComponent } from './views/map/map.component';
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
    HttpClientModule,
    NgxGaugeModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyCKc1o8qtfpkWMFUYkmyXpmx_CMYW1A8tQ'})
  ],
  providers: [
    D3Service,
    ApiconsumerService,
    GeoJsonconsumerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
