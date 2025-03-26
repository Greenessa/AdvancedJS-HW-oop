import '../js/baseClass';
import { Character } from '../js/baseClass';
import { Bowerman } from '../js/Bowerman';

test('should check Character', () => {
    const heroTest = new Character('Philip', 'Bowerman');
    const correct = {
        name: 'Philip',
        type: 'Bowerman',
        health: 100,
        level: 1
    };
    expect(heroTest).toEqual(correct);
});

test ('check name', () => {
    expect(() => {
        new Character('P', 'Bowerman');
    }).toThrow(new Error('В имени персонажа должно быть от 2 до 10 символов'))
});

test ('check type', () => {
    expect(() => {
        new Character('Philip', 'Ironman');
    }).toThrow(new Error('Неизвестное существо'))
});

test('check levelUp', () => {
    const heroTest = new Character('Philip', 'Bowerman');
    heroTest.levelUp();
    const correct = {
        name: 'Philip',
        type: 'Bowerman',
        health: 100,
        level: 2,
        attack: NaN,
        defence: NaN
    };
    expect(heroTest).toEqual(correct);
});

test('test levelUp умершего', () => {
    expect(() => {
        const heroTest = new Character('Philip', 'Bowerman');
        heroTest.health = 0;
        heroTest.levelUp();
    }).toThrow(new Error('Нельзя повысить левел умершего персонажа'));
});

test('should check damage', () => {
    const heroTest = new Bowerman ('Philip', 'Bowerman');
    const correct = {
        name: 'Philip',
        type: 'Bowerman',
        health: 77.5,
        level: 1,
        attack: 25,
        defence: 25,
    };
    heroTest.damage(30);
    expect(heroTest).toEqual(correct);
});

test('test damage умершего персонажа' , () => {
    expect(() => {
        const heroTest = new Character('Philip', 'Bowerman');
        heroTest.health = 0;
        heroTest.damage(30);
    }).toThrow(new Error('Персонаж умер'));
});








