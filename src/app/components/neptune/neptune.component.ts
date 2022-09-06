import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-neptune',
  templateUrl: './neptune.component.html',
  styleUrls: ['./neptune.component.scss']
})
export class NeptuneComponent implements OnInit {

  // Variables needed for a responsive sidenav
  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  planetInformation = [
    {
      name: 'Overview',
      imagename: 'planet-neptune',
      description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
      rotation: 16.08,
      revolution: 164.79,
      radius: '24,622',
      temperature: -201,
    },
    {
      name: 'Internal Structure',
      imagename: "planet-neptune-internal",
      description: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      rotation: 16.08,
      revolution: 164.79,
      radius: '24,622',
      temperature: -201,
    },
    {
      name: 'Surface Geology',
      imagename: "planet-neptune",
      supportingimagename: "planet-neptune-geology",
      description: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      rotation: 16.08,
      revolution: 164.79,
      radius: '24,622',
      temperature: -201,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setData(event: MatTabChangeEvent) {
    console.log("click", event.tab.textLabel);
  }

}
