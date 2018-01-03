import { Pilot } from '../pilots/pilot';

export class SpaceShip {   
    modelName: string;
    imageUrl: string;
    health: number = 75;
    activeShields: boolean = true;
    activeWeapon: boolean = false;
    pilot: Pilot;

    constructor(modelName: string, imageUrl: string) {
        this.modelName = modelName;
        this.imageUrl = imageUrl;
    }
}
