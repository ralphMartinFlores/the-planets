import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {

  // Variables needed for a responsive sidenav
  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  planetInformation = [
    {
      name: 'Overview',
      imagename: 'planet-mars',
      description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
      rotation: 1.03,
      revolution: 1.88,
      radius: '3,389.5',
      temperature: -28,
    },
    {
      name: 'Internal Structure',
      imagename: "planet-mars-internal",
      description: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      rotation: 1.03,
      revolution: 1.88,
      radius: '3,389.5',
      temperature: -28,
    },
    {
      name: 'Surface Geology',
      imagename: "planet-mars",
      supportingimagename: "planet-mars-geology",
      description: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      rotation: 1.03,
      revolution: 1.88,
      radius: '3,389.5',
      temperature: -28,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setData(event: MatTabChangeEvent) {
    console.log("click", event.tab.textLabel);
  }

}
