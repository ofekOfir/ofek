let action = document.getElementById("button1");
action.addEventListener("click", start);
let startCounter = 0;
const cardsURL = {
    clubs: { 11: "/svg/clubs_jack.svg", 12: "/svg/clubs_queen.svg", 13: "/svg/clubs_king.svg", 14: "/svg/clubs_ace.svg" },
    hearts: { 11: "/svg/hearts_jack.svg", 12: "/svg/hearts_queen.svg", 13: "/svg/hearts_king.svg", 14: "/svg/hearts_ace.svg" },
    diamonds: { 11: "/svg/diamonds_jack.svg", 12: "/svg/diamonds_queen.svg", 13: "/svg/diamonds_king.svg", 14: "/svg/diamonds_ace.svg" },
    spades: { 11: "/svg/spades_jack.svg", 12: "/svg/spades_queen.svg", 13: "/svg/spades_king.svg", 14: "/svg/spades_ace.svg" }
};
for (let i = 2; i <= 10; i++) {
    cardsURL.clubs[i] = "/svg/clubs_" + i + ".svg";
    cardsURL.hearts[i] = "/svg/hearts_" + i + ".svg";
    cardsURL.diamonds[i] = "/svg/diamonds_" + i + ".svg";
    cardsURL.spades[i] = "/svg/spades_" + i + ".svg";
}
function setCard() {

}
function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.style.backgroundImage = "url(/svg/blue.svg)";
    const currentDiv = document.getElementById("handCards");
    currentDiv.appendChild(newDiv);
}
function addPlayerElement(str) {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "cardOfPlayers";
    newDiv.style.backgroundImage = "url(/svg/blue.svg)";
    const currentDiv = document.getElementById(str);
    currentDiv.appendChild(newDiv);
}
function addTableElement(type, number) {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.style.backgroundImage = "url(" + cardsURL[type][number] + ")";
    const currentDiv = document.getElementById("handCards");
    currentDiv.appendChild(newDiv);
}
function switchPlayerElement(type, number) {
    const currentDiv = document.getElementById("playerCards");
    const newDiv = document.createElement("div");
    newDiv.className = "cardOfPlayers";
    newDiv.style.backgroundImage = "url(" + cardsURL[type][number] + ")";
    currentDiv.appendChild(newDiv);
}
function switchComputerElement(type, number) {
    const currentDiv = document.getElementById("computerCards");
    const newDiv = document.createElement("div");
    newDiv.className = "cardOfPlayers";
    newDiv.style.backgroundImage = "url(" + cardsURL[type][number] + ")";
    currentDiv.appendChild(newDiv);
}
function switchTableElement(type, number) {
    const currentDiv = document.getElementById("handCards");
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.style.backgroundImage = "url(" + cardsURL[type][number] + ")";
    currentDiv.appendChild(newDiv);
}
function game() {
    let deck = reset();
    let player1 = playerCards(deck);
    let player2 = playerCards(deck);
    burnCard(deck);
    table = tableFlop(deck);
    burnCard(deck);
    table.push(tableTurn(deck));
    burnCard(deck);
    table.push(tableRiver(deck));
    whoWins(player1, player2, table);
    console.log(Object.keys(deck).length);
}
let player1, player2, deck, table;
function start() {
    startCounter++;
    if (startCounter == 1) {
        deck = reset();
        player1 = playerCards(deck);
        player2 = playerCards(deck);
        for (i = 0; i < 5; i++) {
            addElement();
        }
        for (i = 0; i < 2; i++) {
            addPlayerElement("computerCards");
            addPlayerElement("playerCards");
        }
    }
    if (startCounter == 2) {
        burnCard(deck);
        table = tableFlop(deck);
        let currentDiv = document.getElementById("playerCards");
        currentDiv.innerHTML = "";
        switchPlayerElement(player1[0][0], player1[0][1]);
        switchPlayerElement(player1[1][0], player1[1][1]);
    }
    if (startCounter == 3) {
        let currentDiv = document.getElementById("handCards");
        currentDiv.innerHTML = "";
        switchTableElement(table[0][0], table[0][1]);
        switchTableElement(table[1][0], table[1][1]);
        switchTableElement(table[2][0], table[2][1]);
        addElement();
        addElement();
        burnCard(deck);
        table.push(tableTurn(deck));
    }
    if (startCounter == 4) {
        let currentDiv = document.getElementById("handCards");
        currentDiv.innerHTML = "";
        switchTableElement(table[0][0], table[0][1]);
        switchTableElement(table[1][0], table[1][1]);
        switchTableElement(table[2][0], table[2][1]);
        switchTableElement(table[3][0], table[3][1]);
        addElement();
        burnCard(deck);
        table.push(tableRiver(deck));
    }
    if (startCounter == 5) {
        let currentDiv = document.getElementById("handCards");
        currentDiv.innerHTML = "";
        switchTableElement(table[0][0], table[0][1]);
        switchTableElement(table[1][0], table[1][1]);
        switchTableElement(table[2][0], table[2][1]);
        switchTableElement(table[3][0], table[3][1]);
        switchTableElement(table[4][0], table[4][1]);
    }
    if (startCounter == 6) {
        let currentDiv = document.getElementById("computerCards");
        currentDiv.innerHTML = "";
        switchComputerElement(player2[0][0], player2[0][1]);
        switchComputerElement(player2[1][0], player2[1][1]);
    }
    if (startCounter == 6) {
        let currentDiv = document.getElementById("computerCards");
        currentDiv.innerHTML = "";
        switchComputerElement(player2[0][0], player2[0][1]);
        switchComputerElement(player2[1][0], player2[1][1]);
        whoWins(player1, player2, table);
    }
    if(startCounter == 7){
        location.reload();
    }


}