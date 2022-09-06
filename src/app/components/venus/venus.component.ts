import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html',
  styleUrls: ['./venus.component.scss']
})
export class VenusComponent implements OnInit {

  // Variables needed for a responsive sidenav
  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  planetInformation = [
    {
      name: 'Overview',
      imagename: 'planet-venus',
      description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      rotation: 243,
      revolution: 224.7,
      radius: '6,051.8',
      temperature: 471,
    },
    {
      name: 'Internal Structure',
      imagename: "planet-venus-internal",
      description: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      rotation: 243,
      revolution: 224.7,
      radius: '6,051.8',
      temperature: 471,
    },
    {
      name: 'Surface Geology',
      imagename: "planet-venus",
      supportingimagename: "planet-venus-geology",
      description: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      rotation: 243,
      revolution: 224.7,
      radius: '6,051.8',
      temperature: 471,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setData(event: MatTabChangeEvent) {
    console.log("click", event.tab.textLabel);
  }

}
