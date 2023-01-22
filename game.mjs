import generateVillages from "./villages.mjs";
import generateMonsters from "./monsters.mjs";
// import { createPlayer } from "player";
// import { fight } from "./fight";

const villages = generateVillages(5);
const monsters = generateMonsters(30, villages);

// function createGame(playerName) {
//     this.villages = generateVillages(5);
//     this.monsters = generateMonsters(villages);
//     this.player = createPlayer();
//     this.screen = 0;
// }

// function startGame() {
//     const [player, villages, monsters] = createGame();
//     player.setNewName();
// }
