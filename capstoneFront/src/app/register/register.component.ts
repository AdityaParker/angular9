import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service'
import { Player } from '../Player'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  players: Player = new Player("", "", 18);
  message: any;
  // data = []

  constructor(private service: BackendService) { }

  ngOnInit(): void {
  }
  public register() {
    let res = this.service.registerPlease(this.players);
    res.subscribe(data => {
      this.message = data;
    })


  }
  handleSubmit(d) {
    console.log(d);

  }



}
