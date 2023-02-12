input.onButtonPressed(Button.A, function () {
    radio.sendString("Yes")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (receivedString))
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("No")
})
radio.setGroup(35)
basic.forever(function () {
	
})
