let kompas_geheugen = 0
input.onButtonPressed(Button.A, function () {
    music.playMelody("C F E F E B G C5 ", 200)
    basic.showNumber(input.compassHeading())
    kompas_geheugen = input.compassHeading()
    music.playMelody("C B A G A A G F ", 200)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        basic.showNumber(input.compassHeading())
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.play()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E F G A B C5 ", 120)
    basic.showNumber(kompas_geheugen)
    music.playMelody("C5 B A G F E D C ", 120)
})
