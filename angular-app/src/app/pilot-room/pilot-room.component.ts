import { PilotService } from './../services/pilot.service';
import { Pilot } from './../pilots/pilot';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

@Output() onPilotSelect = new EventEmitter();;

  pilots: Pilot[] = [];

  selectedPilot: Pilot = null;

  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService.getPilots()
      .subscribe(this.onGetSuccess.bind(this), this.onGetFailure.bind(this));
  }
  
  selectPilot(pilot: Pilot) {
    this.selectedPilot = pilot;
    this.onPilotSelect.emit(pilot);
  }

  pilotLeave(pilot: Pilot) {
    const pilotIndex = this.pilots.indexOf(pilot);
    this.pilots.splice(pilotIndex, 1);
    this.selectPilot(null);
  }
  
  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  private onGetSuccess(pilots: Pilot[]) {
    this.pilots = pilots;
  }

  private onGetFailure(errorMessage) {
    alert(errorMessage);
  }
  
}
