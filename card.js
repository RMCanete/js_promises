let URL = 'https://deckofcardsapi.com/api/deck';

// 1.
$.getJSON(`${URL}/new/draw/`)
.then(res => {let {value, suit} = res.cards[0];
    console.log(`${value} of ${suit}`); });


// 2.
let firstCard = null;
$.getJSON(`${URL}/new/draw/`).then(result => {
    firstCard = result.cards[0];
    let deckID = result.deck_id;
    return $.getJSON(`${URL}/${deckID}/draw/`);})
    .then (result => {
        let secondCard = result.cards[0];
        [firstCard, secondCard].forEach(card => {
            console.log(`${card.value} of ${card.suit}`);
        });});

// 3.
let deckId = null;
let $button = $("button");
let $card = $("card");

$.getJSON(`${URL}/new/shuffle/`).then(res => {
    deckId = res.deck_id;
    $button.show();
});

// $button.on('click', function() {
//     $.getJSON(`${URL}/${deckId}/draw/`).then(result => {
//         let {value, suit} = result.cards[0];
//         $card.text = value, suit

//         console.log(value, suit);
//             if (result.remaining == 0) $button.remove();
//     });
// });
$button.on('click', function() {
    $.getJSON(`${URL}/${deckId}/draw/`).then(result => {
        let cardImage = result.cards[0].image;
        let {value, suit} = result.cards[0];
        $card.text = value, suit
        console.log(value, suit);
            if (result.remaining == 0) $button.remove();
        $card.append(
            $('<img>', {
                src: cardImage,
            })
        );
        return $card
        if (result.remaining === 0) $btn.remove();
    });
});
   