input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Y += -1
    led.plot(2, Y)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Y += 1
    led.plot(2, Y)
})
let Y = 0
led.plot(Y, 2)
