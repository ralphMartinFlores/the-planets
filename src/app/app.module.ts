import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MercuryComponent } from './components/mercury/mercury.component';
import { VenusComponent } from './components/venus/venus.component';
import { EarthComponent } from './components/earth/earth.component';
import { MarsComponent } from './components/mars/mars.component';
import { JupiterComponent } from './components/jupiter/jupiter.component';
import { SaturnComponent } from './components/saturn/saturn.component';
import { UranusComponent } from './components/uranus/uranus.component';
import { NeptuneComponent } from './components/neptune/neptune.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MercuryComponent,
    VenusComponent,
    EarthComponent,
    MarsComponent,
    JupiterComponent,
    SaturnComponent,
    UranusComponent,
    NeptuneComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
