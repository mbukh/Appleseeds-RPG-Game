function Player() {
    this.name = "";
    this.stats = {
        health: 50,
        maxHealth: this.health,
        attack: 7,
        defense: 5,
        dexterity: 0,
        level: 1,
        xp: 0,
        gold: 0,
        potions: 0,
        levelUps: 5,
    };
    this.villageId = 0;
    this.setNewName = () => {
        this.name = prompt("What is your character name?");
    };
    this.levelUp = () => {
        this.level += 1;
        this.levelUps += 10 * this.level;
    };
    this.getStats = () => {
        return this.stats;
    };
    this.goToVillage = (game, village) => {
        game.setScreen(game.screens.village);
        this.villageId = village.id;
    };
    this.goToFight = (game, monster) => {
        game.setScreen(game.screens.fight);
        // game.startFightMechanics(this, monster);
    };
}

export default Player;
