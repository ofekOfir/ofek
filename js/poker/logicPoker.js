
let firstDeck = {
    clubs: [],
    hearts: [],
    diamonds: [],
    spades: []
};
for (let i = 0; i < 13; i++) {
    firstDeck.clubs.push(i + 1);
    firstDeck.hearts.push(i + 1);
    firstDeck.diamonds.push(i + 1);
    firstDeck.spades.push(i + 1);
}
//define a new deck sorted by suits
function reset() {
    deck = {};
    let counter = 1;
    for (let key in firstDeck) {
        for (let i = 0; i < 13; i++) {
            deck[counter] = [key, i + 2];
            counter++;
        }
    }
    let numberOfCards = Object.keys(deck).length;
    for (let i = 1; i <= numberOfCards; i++) {
        let j = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
        let tmp = deck[i.toString()];
        deck[i] = deck[j];
        deck[j] = tmp;
    }
    return deck;
}
//define the player cards
function playerCards(deck) {
    let numberOfCards = Object.keys(deck).length;
    let playerFirstCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    let playerSecondCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    while (playerFirstCard === playerSecondCard || (deck[playerFirstCard] == undefined) || (deck[playerSecondCard] == undefined)) {
        playerFirstCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
        playerSecondCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    }
    let cardsOfPlayer = [];
    cardsOfPlayer.push(deck[playerFirstCard]);
    cardsOfPlayer.push(deck[playerSecondCard]);
    delete deck[playerFirstCard];
    delete deck[playerSecondCard];
    return cardsOfPlayer;
}

function burnCard(deck) {
    let numberOfCards = Object.keys(deck).length;
    let cardToBurn = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    while ((deck[cardToBurn] == undefined)) {
        cardToBurn = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    }
    delete deck[cardToBurn];
}

function tableFlop(deck) {
    let numberOfCards = Object.keys(deck).length;
    let playerFirstCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    let playerSecondCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    let playerThirdCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    while (playerFirstCard === playerSecondCard || playerFirstCard === playerThirdCard || playerSecondCard === playerThirdCard || (deck[playerFirstCard] == undefined) || (deck[playerSecondCard] == undefined) || (deck[playerThirdCard] == undefined)) {
        playerFirstCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
        playerSecondCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    }
    let cardsOfPlayer = [];
    cardsOfPlayer.push(deck[playerFirstCard]);
    cardsOfPlayer.push(deck[playerSecondCard]);
    cardsOfPlayer.push(deck[playerThirdCard]);
    delete deck[playerFirstCard];
    delete deck[playerSecondCard];
    delete deck[playerThirdCard];
    return cardsOfPlayer;
}
function tableTurn(deck) {
    let numberOfCards = Object.keys(deck).length;
    let turnCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    while ((deck[turnCard] == undefined)) {
        turnCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    }
    let container = deck[turnCard];
    delete deck[turnCard];
    return container;
}

function tableRiver(deck) {
    let numberOfCards = Object.keys(deck).length;
    let riverCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    while ((deck[riverCard] == undefined)) {
        riverCard = Math.ceil(Math.random() * (numberOfCards - 1) + 1);
    }
    let container = deck[riverCard];
    delete deck[riverCard];
    return container;
}
function royalFlush(array) {
    let counter = 1;
    let flag = false
    let yes = false;
    for (let i = 0; i < 6; i++) {
        if (array[i][1] === 10) {
            yes = true;
        }
    }
    if (yes) {
        for (let i = 0; i < 6; i++) {
            if (array[i][0] == array[i + 1][0] && (array[i][1] + 1) === array[i + 1][1]) {
                flag = true;
                counter++;
                if (flag = true && counter >= 5) {
                    return flag;
                }
            }
            else {
                flag = false;
                counter = 1;
            }
        }
        if (flag = true && counter >= 5) {
            return flag;
        }
        else {
            return flag;
        }
    }
    return flag;
}
function straightFlush(array) {
    let counter = 1;
    let flag = false
    for (let i = 0; i < 6; i++) {
        if (array[i][0] == array[i + 1][0] && (array[i][1] + 1) === array[i + 1][1]) {
            flag = true;
            counter++;
            if (flag = true && counter >= 5) {
                return flag;
            }
        }
        else {
            flag = false;
            counter = 1;
        }

    }
    if (flag = true && counter >= 5) {
        return flag;
    }
    else {
        return flag;
    }
}

function fullHouse(array) {
    let counter = 1;
    let flag = false
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i][1]) === array[i + 1][1]) {
            flag = true;
            counter++;
            if (flag = true && counter >= 3) {
                array.splice((i - 1), 2);
                flag = false;
                break;
            }
        }
    }
    counter = 1;
    if (array.length < 7) {
        for (let i = 0; i < array.length - 1; i++) {
            if ((array[i][1]) === array[i + 1][1]) {
                flag = true;
                counter++;
                if (flag = true && counter >= 2) {
                    return flag;
                }
            }
        }
    }
    return flag;
}

function fourOfKind(array) {
    let counter = 1;
    let flag = false
    for (let i = 0; i < 6; i++) {
        if ((array[i][1]) === array[i + 1][1]) {
            flag = true;
            counter++;
            if (flag = true && counter >= 4) {
                return flag;
            }
        }
    }
    return flag;
}

function flush(array){
    let counter = 1;
    for (let i = 0; i < array.length-1; i++) {
        if ((array[i][0]) === "hearts") {
            counter++;
        }
    }
    if (counter >= 5){
        return true;
    }
    counter =1;
    for (let i = 0; i < array.length-1; i++) {
        if ((array[i][0]) === "clubs") {
            counter++;
        }
    }
    if (counter >= 5){
        return true;
    }
    counter =1;
    for (let i = 0; i < array.length-1; i++) {
        if ((array[i][0]) === "spades") {
            counter++;
        }
    }
    if (counter >= 5){
        return true;
    }
    counter =1;
    for (let i = 0; i < array.length-1; i++) {
        if ((array[i][0]) === "diamonds") {
            counter++;
        }
    }
    if (counter >= 5){
        return true;
    }
    return false;
}

function straight(array) {
    let counter = 1;
    let flag = false
    for (let i = 0; i < 6; i++) {
        if ((array[i][1] + 1) === array[i + 1][1] || (array[i][1]) === array[i + 1][1]){
            if((array[i][1]+1) === array[i + 1][1]){
                counter++;
            }
            flag = true;
            if (flag = true && counter >= 5) {
                return flag;
            }
        }
        else {
            flag = false;
            counter = 1;
        }

    }
    if (flag = true && counter >= 5) {
        return flag;
    }
    else {
        return flag;
    }
}

function threeOfKind(array) {
    let temp = 0;
    let counter = 1;
    let flag = false
    for (let i = 0; i < 6; i++) {
        if ((array[i][1]) === array[i + 1][1]) {
            flag = true;
            counter++;
        }
        if(counter === 3){
            temp = counter;
            counter = 1;
        }
    }
    if (flag = true && temp >= 3) {
        return flag;
    }
    else{
        return flag;
    }
}

function twoPairs(array) {
    let counter = 1;
    let flag = false
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i][1]) === array[i + 1][1]) {
            flag = true;
            counter++;
            if (flag = true && counter === 2) {
                array.splice((i), 2);
                flag = false;
                break;
            }
        }
    }
    counter = 1;
    if (array.length < 7) {
        for (let i = 0; i < array.length - 1; i++) {
            if ((array[i][1]) === array[i + 1][1]) {
                flag = true;
                counter++;
                if (flag = true && counter >= 2) {
                    return flag;
                }
            }
        }
    }
    return flag;
}

function pair(array){
    let counter = 1;
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i][1]) === array[i + 1][1]) {
            flag = true;
            counter++;
            if (flag = true && counter === 2) {
                array.splice((i), 2);
                flag = false;
                return true;
            }
        }
    }
    return false;
}

function highCard(player)
{
    let high;
    if(player[0][1]>player[1][1]){
        high = player[0][1]
    }
    else if(player[0][1]<=player[1][1]){
        high = player[1][1]
    }
    return high;
}

function bestHand(arrayPlayer) {
    var sortedArray = arrayPlayer.sort(function (a, b) {
        return a[1] - b[1]
    });
    var sortedArray = arrayPlayer.sort(function (a, b) {
        return a[0] - b[0]
    });
    if (royalFlush(sortedArray)){
        return 10;
    }
    else if (straightFlush(sortedArray)){
        return 9;
    }
    else if (fourOfKind(sortedArray)){
        return 8;
    }
    else if(fullHouse(sortedArray))
    {
        return 7;
    }
    else if(flush(sortedArray))
    {
        return 6;
    }
    else if(straight(sortedArray))
    {
        return 5;
    }
    else if(threeOfKind(sortedArray))
    {
        return 4;
    }
    else if(twoPairs(sortedArray))
    {
        return 3;
    }
    else if(pair(sortedArray))
    {
        return 2;
    }
    else{
        return -1;
    }
}
function whoWins(player1, player2, table) {
    let best1;
    let best2;
    let arrayPlayer1 = [];
    for (i = 0; i < table.length; i++) {
        arrayPlayer1.push(table[i]);
    }
    arrayPlayer1.push(player1[0]);
    arrayPlayer1.push(player1[1]);
    let arrayPlayer2 = [];
    for (i = 0; i < table.length; i++) {
        arrayPlayer2.push(table[i]);
    }
    arrayPlayer2.push(player2[0]);
    arrayPlayer2.push(player2[1]);
    console.log(arrayPlayer1);
    console.log(arrayPlayer2);
    best1 = bestHand(arrayPlayer1);
    best2 = bestHand(arrayPlayer2);
    console.log(best1)
    console.log(best2)
    if(best1>best2)
    {
        let currentDiv = document.getElementById("pot");
        currentDiv.innerHTML = "player 1 wins";
        return;
    }
    else if(best1<best2)
    {
        let currentDiv = document.getElementById("pot");
        currentDiv.innerHTML = "computer wins";
        return;
    }
    else{
        if(highCard(player1)>highCard(player2)){
            let currentDiv = document.getElementById("pot");
            currentDiv.innerHTML = "player 1 wins";
        }
        else if(highCard(player2)<highCard(player1)){
            let currentDiv = document.getElementById("pot");
            currentDiv.innerHTML = "computer wins";
        }
        else{
            let currentDiv = document.getElementById("pot");
        currentDiv.innerHTML = "split";
        }
    }
}

