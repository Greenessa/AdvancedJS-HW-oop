import {Character} from './baseClass';

export class Magician extends Character {
    constructor(name, type = 'Magician') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}
