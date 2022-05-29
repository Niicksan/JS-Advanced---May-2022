function heroes() {
    const canfight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    });

    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    });

    const fighter = (name) => {
        const fighter = {
            name,
            health: 100,
            stamina: 100
        };

        return Object.assign(fighter, canfight(fighter));
    };

    const mage = (name) => {
        const magician = {
            name,
            health: 100,
            mana: 100
        };

        return Object.assign(magician, canCast(magician));
    };

    return { mage: mage, fighter: fighter };
}

const hero = heroes();

const mage = hero.mage("Scorcher");
mage.cast("fireball");
mage.cast("thunder");
mage.cast("light");

const fighter = hero.fighter("Scorcher 2");
fighter.fight();

console.log(fighter.stamina);
console.log(mage.mana);