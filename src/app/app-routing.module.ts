import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthComponent } from './components/earth/earth.component';
import { HomeComponent } from './components/home/home.component';
import { JupiterComponent } from './components/jupiter/jupiter.component';
import { MarsComponent } from './components/mars/mars.component';
import { MercuryComponent } from './components/mercury/mercury.component';
import { NeptuneComponent } from './components/neptune/neptune.component';
import { SaturnComponent } from './components/saturn/saturn.component';
import { UranusComponent } from './components/uranus/uranus.component';
import { VenusComponent } from './components/venus/venus.component';

const routes: Routes = [
  { path:'', redirectTo:'mercury', pathMatch: 'full' },
  { path: 'mercury', component: MercuryComponent },
  { path: 'venus', component: VenusComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'jupiter', component: JupiterComponent },
  { path: 'saturn', component: SaturnComponent },
  { path: 'uranus', component: UranusComponent },
  { path: 'neptune', component: NeptuneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
