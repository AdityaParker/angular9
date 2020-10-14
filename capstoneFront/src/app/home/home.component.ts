import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['6 Players', '5 Games', '3 Teams', '2 Rounds'],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: true

    };
    const typed = new Typed('.typed-element', options);

  }


}
