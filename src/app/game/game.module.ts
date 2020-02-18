import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameRoutingModule } from './game-routing.module';
import { NewGameComponent } from './new-game/new-game.component';
import { HandComponent } from './new-game/hand.component';
import { HandService } from './new-game/hand.service';

@NgModule({
  declarations: [NewGameComponent, HandComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    //FlexLayoutModule
  ],
  providers: [ HandService ]
})
export class GameModule { }
