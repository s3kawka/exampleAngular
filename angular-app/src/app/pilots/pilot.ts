export class Pilot {
    firstName: string;
    lastName: string;
    imageUrl: string;
    id: number;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value: string) {
        const values = value.split(' ');
        this.firstName = values[0];
        this.lastName = values[1];
    }

    static  defaultImageUrl = '/assets/pilot.png';

    constructor(attrs: {id?: number, fullName?: string, firstName?: string, lastName?: string, imageUrl?: string} = {}) {
        this.id = attrs.id;
        this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
        if (attrs.fullName) {
            this.fullName = attrs.fullName
        } else {
            this.firstName = attrs.firstName;
            this.lastName = attrs.lastName;
        }
    }
}
