export class Character {
    constructor(name) {
        this.health = 100;
        this.level = 1;
        // this.infoCharacter = {
        //     Bowerman: [25, 25],
        //     Swordsman: [40,10],
        //     Magician: [10,40],
        //     Undead: [25,25],
        //     Zombie: [40,10],
        //     Daemon: [10,40]
        // }
        if (name.length > 2 && name.length < 10 ) {
            this.name = name;    
        } else {
            throw new Error('В имени персонажа должно быть от 2 до 10 символов');
        };
        
        // if (Object.hasOwn(this.infoCharacter, type)) {
        //     this.type = type;
        //     this.attack = this.infoCharacter[this.type][0];
        //     this.defence = this.infoCharacter[this.type][1];
        // } else {
        //     throw new Error('Введён неправильный тип персонажа');
        // }
    }
    levelUp() {
        if (this.health > 0) {
            this.level+=1;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить левел умершего персонажа');
        }
    }
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        };

        if (this.health <= 0) {
            throw new Error('Персонаж умер');
        }
    }
}

