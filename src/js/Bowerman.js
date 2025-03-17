import {Character} from './baseClass';
export class Bowerman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Bowerman';
        this.attack = 25;
        this.defence = 25;
    }
}
