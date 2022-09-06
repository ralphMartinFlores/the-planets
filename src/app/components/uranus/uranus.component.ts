import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-uranus',
  templateUrl: './uranus.component.html',
  styleUrls: ['./uranus.component.scss']
})
export class UranusComponent implements OnInit {

  // Variables needed for a responsive sidenav
  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  planetInformation = [
    {
      name: 'Overview',
      imagename: 'planet-uranus',
      description: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      rotation: 17.2,
      revolution: 84,
      radius: '25,362',
      temperature: -195,
    },
    {
      name: 'Internal Structure',
      imagename: "planet-uranus-internal",
      description: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      rotation: 17.2,
      revolution: 84,
      radius: '25,362',
      temperature: -195,
    },
    {
      name: 'Surface Geology',
      imagename: "planet-uranus",
      supportingimagename: "planet-uranus-geology",
      description: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      rotation: 17.2,
      revolution: 84,
      radius: '25,362',
      temperature: -195,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setData(event: MatTabChangeEvent) {
    console.log("click", event.tab.textLabel);
  }

}
