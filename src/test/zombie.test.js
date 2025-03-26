import { Zombie } from "../js/Zombie";

test('should check Zombie', () => {
    const heroTest = new Zombie('Philip');
    const correct = {
        health: 100,
        level: 1,
        name: 'Philip',
        type: 'Zombie',
        attack: 40,
        defence: 10
    }
    expect(heroTest).toEqual(correct);
});
