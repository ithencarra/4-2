input.onButtonPressed(Button.A, function () {
    radio.sendNumber(20)
    basic.showNumber(20)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(30)
    basic.showString("kaixo")
})
radio.onReceivedString(function (receivedString) {
    let receivedstring = ""
    if ("1" == receivedstring) {
        basic.showNumber(20)
    }
    if ("2" == receivedstring) {
        basic.showString("kaixo")
    }
    if ("3" == receivedstring) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(30)
})
radio.setGroup(30)
basic.forever(function () {
	
})
