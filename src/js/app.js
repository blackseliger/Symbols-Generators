// TODO: write your code here
export default class Team {
  constructor() {
    this.heroes = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Мечник',
        type: 'Swordman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    let index = 0;
    const team = this.heroes;
    while (index < team.length) {
      yield this.heroes[index].type;
      index += 1;
    }
  }
}

const test1 = new Team();
for (let type of test1) {
  console.log(type)
}

