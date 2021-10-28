function stop (seconds_to_stop: number) {
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
    wait(seconds_to_stop)
}
input.onButtonPressed(Button.A, function () {
    write_k5()
})
function move_liner (seconds_to_move: number, speed: number) {
    degrees2 = 90 - speed / 100 * 90
    pins.servoWritePin(AnalogPin.P1, degrees2)
    pins.servoWritePin(AnalogPin.P2, 180 - degrees2)
    wait(seconds_to_move * MICRO_SECOND_IN_A_SECOND)
    stop(1)
}
function wait (seconds_to_wait: number) {
    control.waitMicros(seconds_to_wait * MICRO_SECOND_IN_A_SECOND)
}
function draw_outside_line () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    move_liner(SIZE, 75)
    turn_right(72)
}
function write_k5 () {
    for (let index = 0; index < 5; index++) {
        draw_inside_line()
    }
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . # . # .
        . # # # .
        `)
    turn_right(48)
    for (let index = 0; index < 5; index++) {
        draw_outside_line()
    }
}
function draw_inside_line () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    move_liner(INSIDE_OUTSIDE_RATIO * SIZE, 75)
    turn_right(144)
}
function turn_right (degrees: number) {
    time_to_perform = Math.abs(degrees) / NUMBER_OF_DEGREES_PER_SEC * MICRO_SECOND_IN_A_SECOND
    if (degrees > 0) {
        pins.servoWritePin(AnalogPin.P1, 135)
        pins.servoWritePin(AnalogPin.P2, 135)
    } else {
        pins.servoWritePin(AnalogPin.P1, 45)
        pins.servoWritePin(AnalogPin.P2, 45)
    }
    wait(time_to_perform)
    stop(1)
}
let time_to_perform = 0
let degrees2 = 0
let INSIDE_OUTSIDE_RATIO = 0
let SIZE = 0
let NUMBER_OF_DEGREES_PER_SEC = 0
let MICRO_SECOND_IN_A_SECOND = 0
MICRO_SECOND_IN_A_SECOND = 1000
NUMBER_OF_DEGREES_PER_SEC = 278
SIZE = 1
INSIDE_OUTSIDE_RATIO = 1 / 0.618
