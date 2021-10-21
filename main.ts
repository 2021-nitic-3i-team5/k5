function stop(seconds_to_stop: number) {
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
    wait(seconds_to_stop)
}

function move_liner(seconds_to_move: number, speed: number) {
    let degrees2 = 90 - speed / 100 * 90
    pins.servoWritePin(AnalogPin.P1, degrees2)
    pins.servoWritePin(AnalogPin.P2, 180 - degrees2)
    wait(seconds_to_move)
    stop(0)
}

function wait(seconds_to_wait: number) {
    control.waitMicros(seconds_to_wait * MICRO_SECOND_IN_A_SECOND)
}

function turn_right(degrees: number) {
    let time_to_perform = degrees * MICRO_SECOND_IN_A_SECOND / NUMBER_OF_DEGREES_PER_SEC
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    wait(time_to_perform)
    stop(0)
}

let NUMBER_OF_DEGREES_PER_SEC = 0
let MICRO_SECOND_IN_A_SECOND = 0
MICRO_SECOND_IN_A_SECOND = 1000000
NUMBER_OF_DEGREES_PER_SEC = 200
