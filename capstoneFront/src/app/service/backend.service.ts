import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  public getGamePlayers() {
    return this.http.get('http://localhost:8080/game-players');
  }

  public leaderboard(score) {
    return this.http.post('http://localhost:8080/save-score', score, { responseType: "text" as "json" });
  }
  public histroy(status) {
    return this.http.post('http://localhost:8080/save-status', status, { responseType: "text" as "json" });
  }

  public registerPlease(Player) {
    return this.http.post('http://localhost:8080/save-player', Player, { responseType: "text" as "json" })
  }
  public getPlayers() {
    return this.http.get('http://localhost:8080/players');
  }
  public getPlayerByPlayerName(playerName) {
    return this.http.get("http://localhost:8080/search/" + playerName);

  }

}
