function 進む (ミリ秒数: number) {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(ミリ秒数)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # # . .
        . # . # .
        `)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    進む(1000)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    回る(90)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    進む(1000)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
function 回る (角度: number) {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    if (角度 >= 0) {
        pins.servoWritePin(AnalogPin.P1, 180 - SPEED_DELAY)
        pins.servoWritePin(AnalogPin.P2, 180 - SPEED_DELAY)
    } else {
        pins.servoWritePin(AnalogPin.P1, SPEED_DELAY)
        pins.servoWritePin(AnalogPin.P2, SPEED_DELAY)
    }
    basic.pause(角度 * ROTATE_AWAIT_MILLISEC)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
let ROTATE_AWAIT_MILLISEC = 0
let SPEED_DELAY = 0
SPEED_DELAY = 89
ROTATE_AWAIT_MILLISEC = 10
if (SPEED_DELAY >= 90) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
