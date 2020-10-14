import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service'


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any;
  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.service.getPlayers().subscribe(data => {
      // console.log(data);

      this.players = data;
      // console.log(this.players);

    })
  }


}
