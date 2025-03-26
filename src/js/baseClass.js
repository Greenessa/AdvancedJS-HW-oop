export class Character {
    constructor(name, type) {
        const types = ['Bowerman','Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
        if (name.length < 2 || name.length > 10 ) {
            throw new Error('В имени персонажа должно быть от 2 до 10 символов');       
        }
        this.name = name;
        if (!types.includes(type)) {
            throw new Error('Неизвестное существо')
        } else {
            this.type = type;
        }
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
        
    }
    
    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего персонажа');
        }
        this.level+=1;
        this.health = 100;
        this.attack = this.attack * 1.2;
        this.defence = this.defence * 1.2;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('Персонаж умер');
        }
        this.health -= points * (1 - this.defence / 100);
    }
}
