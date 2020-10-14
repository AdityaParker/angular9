import { Component, OnInit } from '@angular/core';

import { BackendService } from '../service/backend.service'
import { score } from '../score';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {



  constructor(private service: BackendService) { }
  sc: score = new score("", "", 0);
  data: any
  arrs: any;
  teams = []
  p1 = []
  p2 = []
  randomTeam = [];
  randomPlayer1 = [];
  randomPlayer2 = [];

  count = 0;
  roundCount = 1;
  countTeam = 0;
  currTeam = this.randomTeam[this.countTeam];
  countPlayer = 0;
  currPlayer = " ";
  num: number = 0;
  score: number = 0;

  ngOnInit(): void {

    this.service.getPlayers().subscribe(data => {
      this.arrs = data;




    })




    if (this.roundCount === 1) {
      this.currPlayer = this.randomPlayer1[this.countPlayer];
    }
    else {
      this.currPlayer = this.randomPlayer2[this.countPlayer];
    }

  }
  public updateLeaderboard() {
    this.service.leaderboard(this.sc).subscribe(data => {
      this.data = data;

    })
  }





  displayCount: number = this.roundCount;
  displayTeam: string = this.currTeam;
  displayPlayer: string = this.currPlayer;
  playerInfo = [0, 0, 0];
  winMessage: string = ''
  getData(arrs) {
    for (let x in arrs) {
      this.teams.push(arrs[x].teamName)
      this.p1.push(arrs[x].playerName)

    }

    this.randomTeam = this.teams.slice(0, 4)


    this.randomPlayer1 = this.p1.slice(0, 4)
    this.randomPlayer2 = this.p1.slice(4, 8)


  }
  handlePlay() {
    console.log("Inside handle play");
    this.getData(this.arrs)



    this.count++;
    this.playerInfo[this.countPlayer] += this.getScore(this.num);
    this.score = this.getScore(this.num)

    let tCount = this.count % 3;
    switch (tCount) {
      case 0:
        this.countTeam = (this.countTeam + 1) % 3;
        this.countPlayer = (this.countPlayer + 1) % 3;
        break;
      case 1:
        this.countTeam = (this.countTeam + 1) % 3;
        this.countPlayer = (this.countPlayer + 1) % 3;
        break;
      case 2:
        this.countTeam = (this.countTeam + 1) % 3;
        this.countPlayer = (this.countPlayer + 1) % 3;
        break;
      default:
        console.log('Something wrong!');
        break;
    }
    if (this.count < 9) {
      this.setPlayer();
      this.setText();
    }
    else {
      let maxS = 0;
      let info = 0;
      for (let i = 0; i < this.playerInfo.length; i++) {
        if (maxS < this.playerInfo[i]) {
          maxS = this.playerInfo[i];
          info = i;
        }
      }
      this.winMessage = "Player " + this.randomPlayer1[info] + " wins with " + maxS + " score!";
    }
  }

  setPlayer() {
    this.sc.player = this.randomPlayer1[this.countPlayer];
    this.sc.team = this.randomTeam[this.countTeam];
    this.currTeam = this.randomTeam[this.countTeam];
    this.currPlayer = this.randomPlayer1[this.countPlayer];

  }

  setText() {
    this.displayCount = this.roundCount;
    this.displayTeam = this.currTeam;
    this.displayPlayer = this.currPlayer;


    document.querySelector("input").value = "";
  }

  getScore(num: number) {
    this.updateLeaderboard();

    if (num >= 2 && num <= 10) {
      this.sc.score = Math.floor((Math.random() + 1) * (num + 1)) * 10;
      return this.sc.score;
    }
  }



}


