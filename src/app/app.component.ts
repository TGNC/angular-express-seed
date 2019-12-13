import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// todo - remove the ViewEncapsulation.None to demonstrate random tags problem
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    constructor() {}

    title = 'Nagel the king';
}
