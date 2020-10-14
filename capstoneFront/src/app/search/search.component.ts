import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  playerName: string;
  player: any;
  constructor(private service: BackendService) { }

  ngOnInit(): void {
  }

  findByPlayerName() {
    this.service.getPlayerByPlayerName(this.playerName).subscribe(data => {
      this.player = data;
      console.log(this.player);

    })
  }

}
