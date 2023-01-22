import generateId from "./utils.mjs";

function radomMonster() {
    this.id = generateId();
    this.name = generateMonsterName();
    this.villageId = 0;
    this.stats = {
        health: Math.floor(Math.random() * 61) + 40, // 40 - 100
        attack: Math.floor(Math.random() * 26) + 5, // 5 - 30
        defense: Math.floor(Math.random() * 16) + 5, //  5 - 20
        dexterity: Math.floor(Math.random() * 11), // 0 - 10
        level: Math.ceil(Math.random() * 10),
        xp: 0,
        gold: 0,
        potion: 0,
    };
    this.levelUp = () => (this.level += 1);
    this.setVillage = (villageId) => (this.villageId = villageId);
}

function generateMonsters(n, villages = []) {
    const monsters = [];
    for (let i = 0; i < n; i++) {
        let villageId =
            villages[Math.floor(Math.random() * villages.length)]?.id || 0;
        const monster = new radomMonster();
        monster.setVillage(villageId);
        villages[villageId]?.addMonster(monster.id);
        monsters.push(monster);
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
