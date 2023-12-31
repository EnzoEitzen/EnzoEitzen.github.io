let drumButton = document.querySelectorAll(".drum")
for (let i = 0; i < drumButton.length; i++) {
    drumButton.item(i).addEventListener("click", function () {
        makeSound(this.textContent)
        buttonAnimation(this.textContent)
    })
}
document.addEventListener("keydown", (key) => {
    makeSound(key.key)
    buttonAnimation(key.key)
})

function makeSound(pressedButton) {
    let audio = new Audio()
    switch (pressedButton) {
        case 'w':
            audio.src = "sounds/tom-1.mp3"
            audio.play()
            break
        case 'a':
            audio.src = "sounds/tom-2.mp3"
            audio.play()
            break
        case 's':
            audio.src = "sounds/tom-3.mp3"
            audio.play()
            break
        case 'd':
            audio.src = "sounds/tom-4.mp3"
            audio.play()
            break
        case 'j':
            audio.src = "sounds/snare.mp3"
            audio.play()
            break
        case 'k':
            audio.src = "sounds/crash.mp3"
            audio.play()
            break
        case 'l':
            audio.src = "sounds/kick-bass.mp3"
            audio.play()
            break
        default:
            console.log("The button pressed was: " + pressedButton + " gave out a error.")
            break
    }
}

function buttonAnimation(pressedButton) {
    const activeButton = document.querySelector("." + pressedButton )
    activeButton.classList.toggle("pressed")
    setTimeout(() => {
        activeButton.classList.toggle("pressed")
    }, 100)
}