import utils from "./utils.mjs";

function Fight(player, monster) {
    this.turn = undefined;
    this.actions = {
        attack: {
            text: "Attack / " + player.stats.attack,
            // act() {
            //     attackMonster;
            // },
        },
        usePotion: {
            text: "Use potion to heal / " + player.stats.potions,
            // act() {
            //     usePotion;
            // },
        },
        abandon: {
            text: "Abandon this hell and loose XP",
            // act() {
            //     abandonFight;
            // },
        },
    };
    this.getTurn = () => {
        console.log("Rolling dice to get the first turn.");
        const rollPlayer = this.roll20();
        const rollMonster = this.roll20();
        console.table({
            Player: rollPlayer + " / 20 + " + player.stats.dexterity,
            Monster: rollMonster + " / 20 + " + monster.stats.dexterity,
        });
        const roll =
            rollPlayer +
            player.stats.dexterity -
            (rollMonster + monster.stats.dexterity);
        if (roll > 0) {
            this.turn = player;
            console.log("Player's turn");
        }
        if (roll < 0) {
            this.turn = monster;
            console.log("Monster's turn");
        }
        if (roll === 0) {
            console.log("Draw. Roll again.");
            this.getTurn();
        }
        return this.turn;
    };
    this.roll20 = () => {
        return utils.rand(1, 20);
    };
    this.playerAttack = () => {
        monster.stats.health -= 10;
        // player.setPunch();
        // monster.getPunch();
    };
    this.monsterAttack = () => {
        player.stats.health -= 10;
        // monster.setPunch();
        // player.getPunch();
    };
    this.getActions = () => {
        return Object.values(this.actions);
    };
}

export default Fight;
