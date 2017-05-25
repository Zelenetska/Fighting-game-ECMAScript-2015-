class Fighter {
    constructor(name, power, health){
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDamage(damage){
        this.health = this.health - damage;
        console.log(`${this.name} health: ${this.health}`);
    }

    hit(enemy, point) {
        var damage = point * this.power;
        enemy.setDamage(damage);
    }
}

class ImprovedFighter extends Fighter {
    doubleHit(point) {
        super.hit(enemy, point*2);
    }
}


function fight(fighter, improvedFighter, point) {
    while (true) {
        fighter.hit(improvedFighter, point);
        if (improvedFighter.health <= 0) {
            console.log(`${fighter.name} is a winner!`);
            break;
        }
        improvedFighter.hit(fighter, point);
        if (fighter.health <= 0) {
            console.log(`${improvedFighter.name} is a winner!`);
            break;
        }
    }
}

let fighter = new Fighter('Aristarkh', 3, 100);
let improvedFighter = new ImprovedFighter('Lyudvig', 2, 110);

var point = 10;
fight(fighter, improvedFighter, point);
