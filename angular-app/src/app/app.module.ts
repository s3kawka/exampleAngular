import { Pilot } from './pilots/pilot';
import { SpaceShip } from './ships/space-ship';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A2sCommModule } from 'a2s-comm';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponentComponent } from './pilot-component/pilot-component.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { AppRoutingModule } from './app-routing.module';
import { BlackHoleComponent } from './black-hole/black-hole.component';

import { SpaceShipService } from './services/space-ship.service';
import { PilotService } from './services/pilot.service';
import { EngineersTrashGuardService } from './services/engineers-trash-guard.service';
import { SpaceImageDirective } from './directives/space-image.directive';
import { ShipNamePipe } from './pipes/ship-name.pipe';
import { EngineersTrashComponent } from './engineers-trash/engineers-trash.component';
import { PilotFormComponent } from './pilot-form/pilot-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent,
    PilotComponentComponent,
    PilotComponent,
    PilotRoomComponent,
    EngineersRoomComponent,
    SpaceImageDirective,
    ShipNamePipe,
    BlackHoleComponent,
    EngineersTrashComponent,
    PilotFormComponent
  ],
  imports: [
    BrowserModule,
    A2sCommModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SpaceShipService,PilotService,EngineersTrashGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
