let 描画時間 = 0
input.onButtonPressed(Button.A, function () {
    draw_rasen()
})
function draw_rasen () {
    for (let 螺旋数 = 0; 螺旋数 <= 49; 螺旋数++) {
        描画時間 = 500 + 螺旋数 * 250
        for (let カウンター = 0; カウンター <= 3; カウンター++) {
            basic.showNumber(カウンター)
            pins.servoWritePin(AnalogPin.P1, 60)
            pins.servoWritePin(AnalogPin.P2, 120)
            if (カウンター >= 2) {
                basic.pause(描画時間)
            } else {
                basic.pause(描画時間 + 250)
            }
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # # . .
                . # . # .
                `)
            pins.servoWritePin(AnalogPin.P1, 45)
            pins.servoWritePin(AnalogPin.P2, 45)
            // 実際は 323.74101.
            basic.pause(320)
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
        }
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
}
