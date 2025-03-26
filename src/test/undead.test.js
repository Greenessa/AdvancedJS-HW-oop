import { Undead } from "../js/Undead";

test('should check Undead', () => {
    const heroTest = new Undead('Philip');
    const correct = {
        health: 100,
        level: 1,
        name: 'Philip',
        type: 'Undead',
        attack: 25,
        defence: 25
    }
    expect(heroTest).toEqual(correct);
});
