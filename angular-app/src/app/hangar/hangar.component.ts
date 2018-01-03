import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceShipService } from './../services/space-ship.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {SpaceShip} from '../ships/space-ship';
import {BomberShip} from '../ships/bomber-ship';
import {FighterShip} from '../ships/fighter-Ship';
import { Pilot } from '../pilots/pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  selectedPilot: Pilot = null;
  spaceShips$: Observable<SpaceShip[]>;
  
  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
    this.spaceShips$ = this.spaceShipService.hangarShips$;
   }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave(this.selectedPilot);
  }


}
