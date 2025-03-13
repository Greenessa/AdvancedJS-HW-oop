import {Character} from './baseClass';
export class Bowerman extends Character {
    constructor(name, type) {
        super(name);
        if (type === 'Bowerman') {
            this.type = type;
            this.attack = 25;
            this.defence = 25;
        } else throw new Error('Введён неправильный тип персонажа: должен быть Bowman');
    }
    levelUp() {
        super.levelUp();
        this.attack = this.attack * 1,2;
        this.defence = this.defence * 1,2;
    }
}

export class Swordsman extends Character {
    constructor(name, type) {
        super(name);
        if (type === 'Swordsman') {
            this.type = type;
            this.attack = 40;
            this.defence = 10;
        } else throw new Error('Введён неправильный тип персонажа: должен быть Swordsman');
    }
    levelUp() {
        super.levelUp();
        this.attack = this.attack * 1,2;
        this.defence = this.defence * 1,2;
    }
} 


export class Magician extends Character {
    constructor(name, type) {
        super(name);
        if (type === 'Magician') {
            this.type = type;
            this.attack = 10;
            this.defence = 40;
        } else throw new Error('Введён неправильный тип персонажа: должен быть Magician');
    }
    levelUp() {
        super.levelUp();
        this.attack = this.attack * 1,2;
        this.defence = this.defence * 1,2;
    }
} 

export class Undead extends Character {
    constructor(name, type) {
        super(name);
        if (type === 'Undead') {
            this.type = type;
            this.attack = 25;
            this.defence = 25;
        } else throw new Error('Введён неправильный тип персонажа: должен быть Undead');
    }
    levelUp() {
        super.levelUp();
        this.attack = this.attack * 1,2;
        this.defence = this.defence * 1,2;
    }
}

export class Zombie extends Character {
    constructor(name, type) {
        super(name);
        if (type === 'Zombie') {
            this.type = type;
            this.attack = 40;
            this.defence = 10;
        } else throw new Error('Введён неправильный тип персонажа: должен быть Zombie');
    }
    levelUp() {
        super.levelUp();
        this.attack = this.attack * 1,2;
        this.defence = this.defence * 1,2;
    }
}

export class Daemon extends Character {
    constructor(name, type) {
        super(name);
        if (type === 'Daemon') {
            this.type = type;
            this.attack = 10;
            this.defence = 40;
        } else throw new Error('Введён неправильный тип персонажа: должен быть Daemon');
    }
    levelUp() {
        super.levelUp();
        this.attack = this.attack * 1,2;
        this.defence = this.defence * 1,2;
    }
}