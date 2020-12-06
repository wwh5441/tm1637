input.onButtonPressed(Button.A, function () {
    if (clocknum <= 0) {
        clocknum += 0
    } else {
        clocknum += -1
    }
    basic.showString("C")
    item.showNumber(clocknum)
})
cbit_IR.onPressEvent(RemoteButton.CH, function () {
    basic.showString("T")
    item.showNumber(dht11.temperature())
    basic.pause(2000)
    item.showNumber(dht11.humidity())
    basic.showString("H")
    basic.pause(2000)
    basic.showString("C")
    item.showNumber(clocknum)
})
cbit_IR.onPressEvent(RemoteButton.Minus, function () {
    if (clocknum <= 0) {
        clocknum += 0
    } else {
        clocknum += -1
    }
    basic.showString("C")
    item.showNumber(clocknum)
})
cbit_IR.onPressEvent(RemoteButton.Add, function () {
    if (clocknum >= 9999) {
        clocknum += 0
    } else {
        clocknum += 1
    }
    basic.showString("C")
    item.showNumber(clocknum)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    item.showNumber(dht11.temperature())
    basic.pause(2000)
    item.showNumber(dht11.humidity())
    basic.showString("H")
    basic.pause(2000)
    basic.showString("C")
    item.showNumber(clocknum)
})
input.onButtonPressed(Button.B, function () {
    if (clocknum >= 9999) {
        clocknum += 0
    } else {
        clocknum += 1
    }
    basic.showString("C")
    item.showNumber(clocknum)
})
cbit_IR.onPressEvent(RemoteButton.EQ, function () {
    clocknum = 0
    basic.showString("C")
    item.showNumber(clocknum)
})
let clocknum = 0
let item: TM1637.TM1637LEDs = null
cbit_IR.init(Pins.P10)
item = TM1637.create(
DigitalPin.P13,
DigitalPin.P14,
7,
4
)
clocknum = 0
let _if = 0
dht11.set_pin(DigitalPin.P15)
basic.showString("C")
item.showNumber(clocknum)
basic.forever(function () {
	
})
