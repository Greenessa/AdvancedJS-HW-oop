import { Magician } from "../js/Magician";
test('should check Magician', () => {
    const heroTest = new Magician('Philip');
    const correct = {
        health: 100,
        level: 1,
        name: 'Philip',
        type: 'Magician',
        attack: 10,
        defence: 40
    };
    expect(heroTest).toEqual(correct);
});
