import {SpaceShip} from './space-ship';
import { Pilot } from '../pilots/pilot';

export class FighterShip extends SpaceShip{

    constructor(pilot?: Pilot) {
        super('FighterShip','/assets/spaceship.png');
        this.pilot = pilot;
    }
}
