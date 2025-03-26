import { Daemon } from "../js/Daemon";

test('should check Daemon', () => {
    const heroTest = new Daemon('Philip');
    const correct = {
        health: 100,
        level: 1,
        name: 'Philip',
        type: 'Daemon',
        attack: 10,
        defence: 40
    };
    expect(heroTest).toEqual(correct);
});
