import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-saturn',
  templateUrl: './saturn.component.html',
  styleUrls: ['./saturn.component.scss']
})
export class SaturnComponent implements OnInit {

    // Variables needed for a responsive sidenav
    @ViewChild(MatDrawer)
    drawer!: MatDrawer;
  
    planetInformation = [
      {
        name: 'Overview',
        imagename: 'planet-saturn',
        description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        rotation: 10.8,
        revolution: 29.46,
        radius: '58,232',
        temperature: -138,
      },
      {
        name: 'Internal Structure',
        imagename: "planet-saturn-internal",
        description: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        rotation: 10.8,
        revolution: 29.46,
        radius: '58,232',
        temperature: -138,
      },
      {
        name: 'Surface Geology',
        imagename: "planet-saturn",
        supportingimagename: "planet-saturn-geology",
        description: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
        rotation: 10.8,
        revolution: 29.46,
        radius: '58,232',
        temperature: -138,
      }
    ]
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    setData(event: MatTabChangeEvent) {
      console.log("click", event.tab.textLabel);
    }

}
