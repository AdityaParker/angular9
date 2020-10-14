import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LeadeboardComponent } from './leadeboard/leadeboard.component';
import { THistoryComponent } from './t-history/t-history.component';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'leaderboard', component: LeadeboardComponent },
  { path: 'tournament', component: THistoryComponent },
  { path: 'play', component: GameComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
