import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.component.html',
  styleUrls: ['./jupiter.component.scss']
})
export class JupiterComponent implements OnInit {

  // Variables needed for a responsive sidenav
  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  planetInformation = [
    {
      name: 'Overview',
      imagename: 'planet-jupiter',
      description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      rotation: 9.93,
      revolution: 11.86,
      radius: '69,911',
      temperature: -108,
    },
    {
      name: 'Internal Structure',
      imagename: "planet-jupiter-internal",
      description: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      rotation: 9.93,
      revolution: 11.86,
      radius: '69,911',
      temperature: -108,
    },
    {
      name: 'Surface Geology',
      imagename: "planet-jupiter",
      supportingimagename: "planet-jupiter-geology",
      description: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      rotation: 9.93,
      revolution: 11.86,
      radius: '69,911',
      temperature: -108,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setData(event: MatTabChangeEvent) {
    console.log("click", event.tab.textLabel);
  }

}
