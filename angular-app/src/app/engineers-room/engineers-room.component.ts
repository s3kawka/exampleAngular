import { SpaceShipService } from './../services/space-ship.service';
import { SpaceShipType } from './../enums/space-ship-type.enum';
import { Component, OnInit } from '@angular/core';
import { SpaceShipFormValues } from './../interface/space-ship-form-values';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  availableTypes = SpaceShipType;
  isProducing:boolean;
  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }
  onSubmit(formValues: SpaceShipFormValues) {
      this.isProducing = true;
      this.spaceShipService.produceShips(formValues)
      .subscribe({complete: () => this.isProducing = false});
  }
}
