// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]

const events = "surprise"

function writeCards(names, events) {
    const writtenCards = []
    for (let i=0; i < names.length; i++) {
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }

    return writtenCards;
}

function countDown(number) {
    let countDown = number;
    while (countDown >= 0) {
        console.log(countDown--)
    }
}