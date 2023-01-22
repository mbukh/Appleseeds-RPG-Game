import utils from "./utils.mjs";

function randomVillage() {
    this.id = utils.generateId(100);
    this.name = generateVillageName();
    this.monsters = [];
    this.addMonster = (monster) => this.monsters.push(monster);
    this.getMonsters = () => this.monsters;
}

function generateVillages(n) {
    const villages = [];
    for (let i = 0; i < n; i++) {
        villages.push(new randomVillage());
    }
    return villages;
}

function generateVillageName() {
    const suffixes = [
        "of Panic",
        "in Threats",
        "Drown in Fear",
        "full of Devils",
        "in Total Darkness",
        "welcomes Deads",
    ];
    const names = [
        "Axminster",
        "Silverkeep",
        "Wealdstone",
        "Wavemeet",
        "Eldham",
        "Aysgarth",
        "Bellechulish",
        "Redwater",
        "Castwrfirth",
        "Lordslane",
        "Bredwardine",
        "Blackburn",
        "Wolford",
    ];
    return [
        names[Math.floor(Math.random() * names.length)],
        suffixes[Math.floor(Math.random() * suffixes.length)],
    ].join(" ");
}

export default generateVillages;
