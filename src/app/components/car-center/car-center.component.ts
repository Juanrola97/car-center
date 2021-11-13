import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-car-center',
  templateUrl: './car-center.component.html',
  styleUrls: ['./car-center.component.css'],
})
export class CarCenterComponent implements OnInit {
  cities: City[];

  selectedCity: City = {} as City;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  ngOnInit(): void {}
}
