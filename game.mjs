import generateVillages from "./modules/villages.mjs";
import generateMonsters from "./modules/monsters.mjs";
import Player from "./modules/player.mjs";
import Fight from "./modules/fight.mjs";

import promptSync from "prompt-sync";

if (!prompt) {
    var prompt = promptSync();
}

function Game(player, villages, monsters) {
    this.player = player;
    this.villages = villages; // must
    this.monsters = monsters;
    this.screens = {
        lobby: "Lobby",
        globalMap: "Global Map",
        village: "village",
        store: "Store",
        fight: "fight",
        endFight: "End of Fight",
        playerStats: "Player Stats",
        endgame: "Game Over",
    };
    this.screen = this.screens.lobby;
    this.getVillages = () => this.villages;
    this.getMonsters = () =>
        monsters.filter((m) => (m.villageId = this.player.villageId));
    this.setScreen = (screen) => (this.screen = screen);
    this.goToGlobalMap = () => this.setScreen(this.screens.globalMap);
    this.goToFight = () => this.setScreen(this.screens.fight);
    this.goToEndFight = () => this.setScreen(this.screens.endFight);
    this.goToPlayerStats = () => this.setScreen(this.screens.playerStats);
    this.goToEndGame = () => this.setScreen(this.screens.endgame);
}

function initGame() {
    let ans, village, monster;

    const player = new Player();
    const villages = generateVillages(7);
    const monsters = generateMonsters(villages);
    const game = new Game(player, villages, monsters);

    // ------------
    // init section
    // ------------

    // player.setNewName();
    console.table(player.getStats());
    console.log(`You are in ${game.screen}`);
    console.table(villages);

    // ---------------
    // village section
    // ---------------

    ans = +prompt("Visit one of the villages. Enter Id: ");
    village = villages[ans];
    player.goToVillage(game, village);
    console.log(
        `You are in a ${game.screen} "${village.name}". List of contracts: `
    );
    console.table(village.getMonsters());

    // ---------------------
    // monster fight section
    // ---------------------

    ans = +prompt("Choose a contract. Enter Id: ");
    monster = village.getMonsters()[ans];
    player.goToFight(game, monster);
    console.log(`You are in a ${game.screen} with "${monster.name}".`);
    console.table(monster);

    // -----------------------
    // fight mechanics section
    // -----------------------
    const fight = new Fight(player, monster);
    let isFight = true;
    while (isFight) {
        let turn = fight.getTurn();
        if (turn === player) {
            console.log("List of actions:");
            console.table(fight.getActions(player));
            ans = +prompt("Choose an action: ");
        } else {
            fight.monsterAttack();
            console.table({
                player: player.getStats(),
                monster: monster.getStats(),
            });
        }
        if (player.stats.health <= 0) {
            console.log("You have to go to heal yourself.");
            isFight = false;
        }
        ans = prompt("Ready to dice again?");
        console.log(["Yes", "No"]);
        if (ans?.toLowerCase() === "no") isFight = false;
    }
}

initGame();
