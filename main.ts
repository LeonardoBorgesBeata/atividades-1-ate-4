let dado = 0
let n1 = 0
let n4 = 0
let dado1 = 0
let n2 = 0
let acumulafio = 0
let n3 = 0
let haqhs = 0
input.onGesture(Gesture.Shake, function () {
    dado = randint(1, 6)
    for (let index = 0; index < 8; index++) {
        music.playMelody("B G E C5 C F A D ", 120)
    }
    if (dado == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (dado == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (dado == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (dado == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (dado == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (dado == 6) {
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    }
    if (n1 == 0) {
        n1 = dado
    } else if (n4 == 0) {
        n4 = dado
    }
})
input.onButtonPressed(Button.AB, function () {
    dado1 = n1 + n2
    acumulafio = dado1 + n3
    haqhs = acumulafio + n4
    basic.showNumber(haqhs)
    n2 = 0
    n1 = 0
    n3 = 0
    haqhs = 0
    dado1 = 0
    acumulafio = 0
})
input.onButtonPressed(Button.B, function () {
    acumulafio = randint(1, 6)
    dado = randint(1, 6)
    for (let index = 0; index < 8; index++) {
        music.playMelody("B G E C5 C F A D ", 120)
    }
    if (dado == 1) {
        basic.showNumber(1)
    } else if (dado == 2) {
        basic.showNumber(2)
    } else if (dado == 3) {
        basic.showNumber(3)
    } else if (dado == 4) {
        basic.showNumber(4)
    } else if (dado == 5) {
        basic.showNumber(5)
    } else if (dado == 6) {
        basic.showNumber(6)
    }
    if (n2 == 0) {
        n2 = dado
    } else if (n3 == 0) {
        n3 = dado
    }
})
