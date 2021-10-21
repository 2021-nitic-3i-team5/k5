def 進む(ミリ秒数: number):
    basic.show_leds("""
        . # # # .
                . # . . .
                . # # # .
                . # . . .
                . # . . .
    """)
    pins.servo_write_pin(AnalogPin.P1, 0)
    pins.servo_write_pin(AnalogPin.P2, 180)
    basic.pause(ミリ秒数)
    basic.show_leds("""
        . # # # .
                . # . # .
                . # # # .
                . # # . .
                . # . # .
    """)
    pins.servo_write_pin(AnalogPin.P1, 90)
    pins.servo_write_pin(AnalogPin.P2, 90)

def on_button_pressed_a():
    進む(1000)
    回る(90)
    進む(1000)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def 回る(角度: number):
    if 角度 >= 0:
        basic.show_leds("""
            . # # # .
                        . . . # .
                        . # # # .
                        . # . . .
                        . # # # .
        """)
        pins.servo_write_pin(AnalogPin.P1, 180 - SPEED_DELAY)
        pins.servo_write_pin(AnalogPin.P2, 180 - SPEED_DELAY)
    else:
        basic.show_leds("""
            . . # . .
                        . # # . .
                        . . # . .
                        . . # . .
                        . # # # .
        """)
        pins.servo_write_pin(AnalogPin.P1, SPEED_DELAY)
        pins.servo_write_pin(AnalogPin.P2, SPEED_DELAY)
    basic.pause(角度 * ROTATE_AWAIT_MILLISEC)
    basic.show_leds("""
        . # # # .
                . # . # .
                . # # # .
                . # # . .
                . # . # .
    """)
    pins.servo_write_pin(AnalogPin.P1, 90)
    pins.servo_write_pin(AnalogPin.P2, 90)
ROTATE_AWAIT_MILLISEC = 0
SPEED_DELAY = 0
SPEED_DELAY = 180
ROTATE_AWAIT_MILLISEC = 10

def on_forever():
    pass
basic.forever(on_forever)
