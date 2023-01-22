import utils from "./utils.mjs";

function radomMonster() {
    this.id = utils.generateId(200);
    this.name = generateMonsterName();
    this.villageId = 0;
    this.stats = {
        health: utils.rand(30, 100),
        maxHealth: this.health,
        attack: utils.rand(5, 30),
        defense: utils.rand(5, 30),
        dexterity: utils.rand(0, 10),
        level: utils.rand(1, 10),
        xp: 0,
        gold: 0,
        potions: 0,
    };
    this.levelUp = () => (this.level += 1);
    this.setVillage = (village) => (this.villageId = village);
    this.getStats = () => {
        return this.stats;
    };
}

function generateMonsters(villages) {
    const monsters = [];
    for (const village of villages) {
        for (let i = 0; i < utils.rand(5, 10); i++) {
            let monster = new radomMonster();
            monster.setVillage(village.id);
            village.addMonster(monster);
            monsters.push(monster);
        }
    }
    return monsters;
}

function generateMonsterName() {
    const nouns = [
        "Salad",
        "Sandwich",
        "Bread",
        "Steak",
        "Tuna Steak",
        "Fish",
        "Shrimp",
        "Rice",
        "Spaghetti",
        "Pizza",
        "Hamburger",
        "Eggs",
        "Cheese",
        "Sausages",
        "Apple Juice",
        "Grape Juice",
        "Milk",
        "Candy",
        "Cookie",
        "Pie",
        "Cake",
        "Cupcake",
    ];
    const adjectives = [
        "Behemoth",
        "Brobdingnagian",
        "Colossal",
        "Elephantine",
        "Enormous",
        "Gargantuan",
        "Gigantesque",
        "Gigantic",
        "Ginormous",
        "Great",
        "Herculean",
        "Huge",
        "Hulking",
        "Humongous",
        "Humungous",
        "Immense",
        "Jumbo",
        "Large",
        "Mammoth",
        "Massive",
        "Monster",
        "Monstrous",
        "Monumental",
        "Mountainous",
        "Prodigious",
        "Pythonic",
        "Sizable",
        "Stupendous",
        "Titanic",
        "Tremendous",
        "Vast",
    ];
    const types = [
        "Bigfoot",
        "Boogeyman",
        "Dragon",
        "Gnome",
        "Goblins",
        "Kraken",
        "Phantom",
        "Troll",
    ];
    return [
        adjectives[Math.floor(Math.random() * adjectives.length)],
        nouns[Math.floor(Math.random() * nouns.length)],
        types[Math.floor(Math.random() * types.length)],
    ].join(" ");
}

export default generateMonsters;
