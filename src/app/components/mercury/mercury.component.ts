import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.scss']
})
export class MercuryComponent implements OnInit {

  // Variables needed for a responsive sidenav
  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  planetInformation = [
    {
      name: 'Overview',
      imagename: 'planet-mercury',
      description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      rotation: 58.6,
      revolution: 87.97,
      radius: '2,439.7',
      temperature: 430,
    },
    {
      name: 'Internal Structure',
      imagename: "planet-mercury-internal",
      description: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      rotation: 58.6,
      revolution: 87.97,
      radius: '2,439.7',
      temperature: 430,
    },
    {
      name: 'Surface Geology',
      imagename: "planet-mercury",
      supportingimagename: "planet-mercury-geology",
      description: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon's.",
      rotation: 58.6,
      revolution: 87.97,
      radius: '2,439.7',
      temperature: 430,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setData(event: MatTabChangeEvent) {
    console.log("click", event.tab.textLabel);
  }

}
