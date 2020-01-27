"use strict";
class Card {
    constructor(hero, mine) {
        if (hero) {
            return new Hero(mine);
        }
        else {
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
        if (mine) {
            this.mine = true;
        }
    }
}
class Hero extends Card {
    constructor(mine) {
        super(true, mine);
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
}
const opponent = {
    hero: document.getElementById("rival-hero"),
    deck: document.getElementById("rival-deck"),
    field: document.getElementById("rival-cards"),
    cost: document.getElementById("rival-cost"),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
const me = {
    hero: document.getElementById("my-hero"),
    deck: document.getElementById("my-deck"),
    field: document.getElementById("my-cards"),
    cost: document.getElementById("my-cost"),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null
};
new Card();
