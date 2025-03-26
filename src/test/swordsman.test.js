import { Swordsman } from "../js/Swordsman";

test('should check Swordsman', () => {
    const heroTest = new Swordsman('Philip');
    const correct = {
        health: 100,
        level: 1,
        name: 'Philip',
        type: 'Swordsman',
        attack: 40,
        defence: 10
    };
    expect(heroTest).toEqual(correct);
});
