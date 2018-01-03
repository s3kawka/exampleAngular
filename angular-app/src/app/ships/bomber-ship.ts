import {SpaceShip} from './space-ship';
import { Pilot } from '../pilots/pilot';

export class BomberShip extends SpaceShip{

    constructor(pilot?: Pilot) {
        super('BomberShip','/assets/spaceship2.png');
        this.pilot = pilot;
    }
}
