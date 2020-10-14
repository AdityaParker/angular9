import { Component, OnInit } from '@angular/core';
import { score } from '../score';
import { BackendService } from '../service/backend.service'


@Component({
  selector: 'app-leadeboard',
  templateUrl: './leadeboard.component.html',
  styleUrls: ['./leadeboard.component.css']
})
export class LeadeboardComponent implements OnInit {
  score: score = new score("", "", 0);
  data;
  leaderData;

  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.service.getGamePlayers().subscribe(d => {
      this.leaderData = d;
    })


  }

  saveLeaderboard(score) {
    this.service.leaderboard(score).subscribe(d => {

      this.data = d;

    })
  }

}
