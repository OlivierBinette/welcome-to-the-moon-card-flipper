
components = makeComponents();
decks = components["decks"];
discards = components["discards"];

display(decks, discards)


function makeComponents() {
    const deck = Deck.BASE_DECK;
    deck.shuffle();

    const decks = deck.split(3);
    const discards = [new Deck(), new Deck(), new Deck()];

    return {
        "decks": decks,
        "discards": discards
    }
}

function enableButtons(decks, discards) {
    if (decks[0].cards.length > 0) {
        document.getElementById("flip-button").disabled = false;
    } else {
        document.getElementById("flip-button").disabled = true;
    }

    if (discards[0].cards.length > 0) {
        document.getElementById("back-button").disabled = false;
    } else {
        document.getElementById("back-button").disabled = true;
    } 

}

function display(decks, discards) {
    var table = document.getElementById('flip-table');

    for (var c = 0; c < 3; c++) {
        card = decks[c].peek()
        if (card) {
            html = card.frontHTML();
        } else {
            html = Card.EMPTY_FRONT_HTML;
        }
        table.rows[0].cells[c].innerHTML = html;
    }

    for (var c = 0; c < 3; c++) {
        card = discards[c].peek()
        if (card) {
            html = card.backHTML();
        } else {
            html = Card.EMPTY_FRONT_HTML;
        }
        table.rows[1].cells[c].innerHTML = html;
    }

    document.getElementById('flip-button').innerHTML = "⤵ Flip! ("+decks[0].cards.length+" left)";

    enableButtons(decks, discards);
}

function flip(decks, discards) {
    for (var c = 0; c < 3; c++) {
        card = decks[c].draw();
        if (card) {
            discards[c].push(card);
        }
    }

    display(decks, discards);
}

function unflip(decks, discards) {
    for (var c = 0; c < 3; c++) {
        card = discards[c].draw();
        if (card) {
            decks[c].push(card);
        }
    }

    display(decks, discards);
}


function shuffle(decks, discards) {
    components = makeComponents();
    
    for (var c = 0; c < 3; c++) {
        delete decks[c].cards;
        delete discards[c].cards;

        decks[c].cards= components["decks"][c].cards;
        discards[c].cards = components["discards"][c].cards;
    
    }
    display(decks, discards);
}

