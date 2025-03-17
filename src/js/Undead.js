import {Character} from './baseClass';
export class Undead extends Character {
    constructor(name) {
        super(name);
        this.type = 'Undead';
        this.attack = 25;
        this.defence = 25;
    }
}
