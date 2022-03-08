
class Card {

    static EMPTY_FRONT_HTML = `<div class="card empty">
        <span class="action-hint"> 🧑‍🚀 </span>
        <span class="number">0</span>
    </div>`
    static EMPTY_BACK_HTML = `<div class="card empty" style="opacity:0">
        <span class="action">🧑‍🚀</span>
    </div> `

    static VALID_FRONT = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    static VALID_BACK = ["🧑‍🚀", "📅", "🌱", "⚡", "🤖", "💧"]

    constructor(front, back) {
        this.validate(front, back);
        this.front = front;
        this.back = back;
    }

    frontHTML() {
        return `<div class="card">
            <span class="action-hint">` + this.back + `</span>
            <span class="number">` + this.front + `</span>
        </div>`;
    }

    backHTML() {
        return `<div class="card">
            <span class="action">`+this.back+`</span>
        </div> `
    }

    toString() {
        return {
            front: this.front.toString(),
            back: this.back
        }
    }

    validate(front, back) {
        console.assert(Card.VALID_FRONT.includes(front), "Invalid value for front of the card.");
        console.assert(Card.VALID_BACK.includes(back), "Invalid value for back of the card.");
    }

}

class Deck {
    static BASE_DECK = new Deck([
        new Card(1, "🤖"),
        new Card(1, "⚡"),
        new Card(2, "🤖"),
        new Card(2, "🌱"),
        new Card(3, "💧"),
        new Card(3, "🧑‍🚀"),
        new Card(3, "📅"),
        new Card(4, "⚡"),
        new Card(4, "🧑‍🚀"),
        new Card(4, "📅"),
        new Card(4, "🌱"),
        new Card(5, "⚡"),
        new Card(5, "🤖"),
        new Card(5, "⚡"),
        new Card(5, "🤖"),
        new Card(5, "🌱"),
        new Card(6, "🧑‍🚀"),
        new Card(6, "📅"),
        new Card(6, "🌱"),
        new Card(6, "⚡"),
        new Card(6, "🤖"),
        new Card(6, "💧"),
        new Card(7, "⚡"),
        new Card(7, "⚡"),
        new Card(7, "🌱"),
        new Card(7, "🌱"),
        new Card(7, "🤖"),
        new Card(7, "💧"),
        new Card(8, "🧑‍🚀"),
        new Card(8, "🤖"),
        new Card(8, "🌱"),
        new Card(8, "🌱"),
        new Card(8, "🤖"),
        new Card(8, "💧"),
        new Card(8, "📅"),
        new Card(9, "⚡"),
        new Card(9, "⚡"),
        new Card(9, "🌱"),
        new Card(9, "🌱"),
        new Card(9, "🤖"),
        new Card(9, "💧"),
        new Card(10, "🧑‍🚀"),
        new Card(10, "📅"),
        new Card(10, "🌱"),
        new Card(10, "⚡"),
        new Card(10, "🤖"),
        new Card(10, "💧"),
        new Card(11, "⚡"),
        new Card(11, "🤖"),
        new Card(11, "⚡"),
        new Card(11, "🤖"),
        new Card(11, "🌱"),
        new Card(12, "⚡"),
        new Card(12, "🧑‍🚀"),
        new Card(12, "📅"),
        new Card(12, "🌱"),
        new Card(13, "💧"),
        new Card(13, "🧑‍🚀"),
        new Card(13, "📅"),
        new Card(14, "🤖"),
        new Card(14, "🌱"),
        new Card(15, "🤖"),
        new Card(15, "⚡")
    ])

    constructor(cards = []) {
        this.cards = cards;
    }

    /**
     * Split the deck in k parts.
     */
    split(k) {
        const n = this.cards.length;
        const decks = [];
        for (let i = 0; i < k; i++) {
            decks.push(new Deck());
        }

        let i = 0;
        this.cards.forEach(
            card => {
                decks[i].push(card);
                i = (i + 1) % k
            }
        );

        return decks;
    }

    peek() {
        return this.cards.slice(-1)[0]
    }

    /**
     * Draw top card from the deck.
     */
    draw() {
        return this.cards.pop();
    }

    /**
     * Add given card to the top of the deck.
     */
    push(card) {
        this.cards.push(card);
    }

    /**
     * Shuffle the deck.
     */
    shuffle(rng) {
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(rng() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    copy() {
        const arr = [];
        this.cards.forEach(
            card => {
                arr.push(card.copy());
            }
        );

        return arr;
    }
}