function createPlayer() {
    this.name = "";
    this.stats = {
        health: 0,
        attack: 0,
        defense: 0,
        dexterity: 0,
        level: 1,
        xp: 0,
        gold: 0,
        potion: 0,
    };
    this.setNewName = () => {
        this.name = prompt("What is your character name?");
    };
}

export default { createPlayer };
