def stop(seconds_to_stop: number):
    pins.servo_write_pin(AnalogPin.P2, 90)
    pins.servo_write_pin(AnalogPin.P1, 90)
    wait(seconds_to_stop)

def move_liner(seconds_to_move: number, speed: number):
    degrees2 = 90 - speed / 100 * 90
    pins.servo_write_pin(AnalogPin.P1, degrees2)
    pins.servo_write_pin(AnalogPin.P2, 180 - degrees2)
    wait(seconds_to_move)
    stop(0)

def wait(seconds_to_wait: number):
    control.wait_micros(seconds_to_wait * MICRO_SECOND_IN_A_SECOND)

def turn_right(degrees: number):
    time_to_perform = degrees * MICRO_SECOND_IN_A_SECOND / NUMBER_OF_DEGREES_PER_SEC
    pins.servo_write_pin(AnalogPin.P1, 45)
    pins.servo_write_pin(AnalogPin.P2, 45)
    wait(time_to_perform)
    stop(0)

NUMBER_OF_DEGREES_PER_SEC = 0
MICRO_SECOND_IN_A_SECOND = 0
MICRO_SECOND_IN_A_SECOND = 1000000
NUMBER_OF_DEGREES_PER_SEC = 200
