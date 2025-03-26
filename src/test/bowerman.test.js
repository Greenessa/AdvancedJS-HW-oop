import { Bowerman } from '../js/Bowerman';

test('should check Bowerman', () => {
    const hero1Test = new Bowerman('Philip');
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Philip',
        type: 'Bowerman'
    };
    expect(hero1Test).toEqual(correct);
});
