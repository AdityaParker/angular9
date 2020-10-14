import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LeadeboardComponent } from './leadeboard/leadeboard.component';
import { THistoryComponent } from './t-history/t-history.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { SearchComponent } from './search/search.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LeadeboardComponent,
    THistoryComponent,
    GameComponent,
    PlayersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
