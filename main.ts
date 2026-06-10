cuteBot.forward()
basic.forever(function () {
    if (input.lightLevel() < 85) {
        cuteBot.motors(54, 54)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    } else {
        cuteBot.closeheadlights()
        cuteBot.forward()
    }
})
