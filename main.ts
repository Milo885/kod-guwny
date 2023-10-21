input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showLeds(`
    . . # . .
    . . # # .
    . . # . .
    # # . . .
    # # . . .
    `)
music.playMelody("C5 F - B - D - D ", 120)
basic.showString("Hello!")
basic.showLeds(`
    . . # . .
    . . # # .
    . . # . .
    # # . . .
    # # . . .
    `)
music.play(music.stringPlayable("C D G D E D E D ", 120), music.PlaybackMode.UntilDone)
