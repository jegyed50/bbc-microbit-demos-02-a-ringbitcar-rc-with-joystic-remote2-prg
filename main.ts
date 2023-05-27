//bbc-microbit-demos-02-a-ringbitcar-rc-with-joystic-remote2-prg
let Y = 0
let X = 0
radio.setGroup(90)
let szorzo = 3
music.setVolume(255)
basic.forever(function () {
    basic.clearScreen()
    basic.pause(1000)
})
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    X = Math.map(X, 1023, 0, -100, 100)
    if (X > 20) {
        images.arrowImage(ArrowNames.West).showImage(0)
    }
    if (X < -20) {
        images.arrowImage(ArrowNames.East).showImage(0)
    }
    radio.sendValue("x", X)
    Y = pins.analogReadPin(AnalogPin.P1)
    Y = Math.map(Y, 1023, 0, -100, 100)
    if (Y > 20) {
        images.arrowImage(ArrowNames.North).showImage(0)
    }
    if (Y < -20) {
        images.arrowImage(ArrowNames.South).showImage(0)
    }
    radio.sendValue("y", Y)
    basic.pause(10)
})
