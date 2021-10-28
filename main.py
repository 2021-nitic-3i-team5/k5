def stop(seconds_to_stop: number):
    pins.servo_write_pin(AnalogPin.P2, 90)
    pins.servo_write_pin(AnalogPin.P1, 90)
    wait(seconds_to_stop)

def on_button_pressed_a():
    move_liner(1, 90)
    turn_right(90)
    move_liner(1, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def move_liner(seconds_to_move: number, speed: number):
    global degrees2
    degrees2 = 90 - speed / 100 * 90
    pins.servo_write_pin(AnalogPin.P1, degrees2)
    pins.servo_write_pin(AnalogPin.P2, 180 - degrees2)
    wait(seconds_to_move * MICRO_SECOND_IN_A_SECOND)
    stop(0)
def wait(seconds_to_wait: number):
    control.wait_micros(seconds_to_wait * MICRO_SECOND_IN_A_SECOND)
def turn_right(degrees: number):
    global time_to_perform
    time_to_perform = degrees / NUMBER_OF_DEGREES_PER_SEC * MICRO_SECOND_IN_A_SECOND
    pins.servo_write_pin(AnalogPin.P1, 45)
    pins.servo_write_pin(AnalogPin.P2, 45)
    wait(time_to_perform)
    stop(0)
time_to_perform = 0
degrees2 = 0
NUMBER_OF_DEGREES_PER_SEC = 0
MICRO_SECOND_IN_A_SECOND = 0
MICRO_SECOND_IN_A_SECOND = 1000
NUMBER_OF_DEGREES_PER_SEC = 190