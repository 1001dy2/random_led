let list: number[] = []
let n = 0
let _ = 0
let a = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < _) {
        a = randint(0, 25)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            light2(a + 1)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    _ = _ - 1
})
input.onButtonPressed(Button.B, function () {
    _ = _ + 1
})
function light2 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
basic.forever(function () {
    if (_ < 0) {
        _ = 0
    }
    if (_ > 25) {
        _ = 25
    }
})
