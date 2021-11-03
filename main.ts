function stop (seconds_to_stop: number) {
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
    wait(seconds_to_stop)
}
input.onButtonPressed(Button.A, function () {
    draw_rasen()
})
function move_liner (seconds_to_move: number, speed: number) {
    degrees2 = 90 - speed / 100 * 90
    pins.servoWritePin(AnalogPin.P1, degrees2)
    pins.servoWritePin(AnalogPin.P2, 180 - degrees2)
    wait(seconds_to_move * MICRO_SECOND_IN_A_SECOND)
    stop(1)
}
function assert (that: boolean, reason: string) {
    while (!(that)) {
        basic.showString("ASF:" + reason)
    }
}
function wait (seconds_to_wait: number) {
    control.waitMicros(seconds_to_wait * MICRO_SECOND_IN_A_SECOND)
}
function draw_rasen () {
    for (let 螺旋数 = 0; 螺旋数 <= 49; 螺旋数++) {
        描画時間 = 500 + 螺旋数 * 250
        for (let カウンター = 0; カウンター <= 3; カウンター++) {
            pins.digitalWritePin(DigitalPin.P1, 60)
            pins.digitalWritePin(DigitalPin.P2, 120)
            if (カウンター >= 2) {
                basic.pause(描画時間)
            } else {
                basic.pause(描画時間 + 250)
            }
        }
        pins.digitalWritePin(DigitalPin.P1, 45)
        pins.digitalWritePin(DigitalPin.P1, 45)
        // 実際は 323.74101.
        basic.pause(300)
    }
}
function draw_rasen_shape (points: number) {
    assert(points >= 3, "pts>=3")
    // カウンタの開始値が 0 以外にできないのが意外だった．
    for (let カウンター2 = 0; カウンター2 <= points - 1; カウンター2++) {
        if (カウンター2 >= points - 2) {
            basic.pause(500)
        } else {
            basic.pause(750)
        }
        // 180 - [ { 180 - ( p - 2 ) } / p ]
        turn_right(180 - 180 * (points - 2) / points)
        stop(1)
    }
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
let 描画時間 = 0
let degrees2 = 0
let NUMBER_OF_DEGREES_PER_SEC = 0
let MICRO_SECOND_IN_A_SECOND = 0
MICRO_SECOND_IN_A_SECOND = 1000
NUMBER_OF_DEGREES_PER_SEC = 278
