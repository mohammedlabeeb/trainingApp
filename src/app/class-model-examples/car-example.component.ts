import { CarModel } from './car-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-example',
  template: `
    <p>
      car-example works!
    </p>
  `,
  styles: []
})
export class CarExampleComponent implements OnInit {



  car: CarModel;

  constructor() {
    this.car = new CarModel();
    this.car.brand = 'BMW';
    this.car.year = 2017;
  }

  ngOnInit() {
  }

  getDescription() {
    this.car.getData();
  }

}
