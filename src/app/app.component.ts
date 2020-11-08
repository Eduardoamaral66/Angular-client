import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  options: string[];
  myControl: FormControl;

  constructor() {
    this.options =  ['Delhi', 'Mumbai', 'Banglore'];
    this.myControl = new FormControl();
  }
}
