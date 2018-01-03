import { BomberShip } from './../ships/bomber-ship';
import { FighterShip } from './../ships/fighter-ship';
import { SpaceShipType } from './../enums/space-ship-type.enum';
import { SpaceShipFormValues } from './../interface/space-ship-form-values';
import { SpaceShip } from './../ships/space-ship';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class SpaceShipService {

  hangarShips$: BehaviorSubject<SpaceShip[]> = new BehaviorSubject<SpaceShip[]>([]);
  static shipProductionTime = 2000;

  constructor() { }

  produceShips(formValues: SpaceShipFormValues): Observable <SpaceShip> {
    const source = Observable
    .range(0, formValues.shipCount)
    .delay(SpaceShipService.shipProductionTime * formValues.shipCount)
    .map(() => {
        switch (formValues.shipType) {
          case SpaceShipType.Fighter:
            return new FighterShip();
          case SpaceShipType.Bomber:
            return new BomberShip();
          default:
            const error = new Error('Invalid ship type');
            return Observable.throw(error);
        }
      });
    source.subscribe((spaceShip: SpaceShip) => {
      const ships = this.hangarShips$.getValue().concat([spaceShip]);
      this.hangarShips$.next(ships);
    });
    return source;
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips$.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips$.next(ships);
  }
}
