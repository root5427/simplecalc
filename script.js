var buttons = document.getElementsByTagName("button")
var btnCount = buttons.length
var output = document.querySelector(".output")

for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener("click", event => {
        if (event.target.innerText !== "=")
            printCharacter(event.target.innerText);
    })
}

var clearBtn = document.querySelector("button.clear")
clearBtn.addEventListener("click", () => {
    output.innerText = "Answer"
})

var equalBtn = document.querySelector("button#equal")
equalBtn.addEventListener("click", () => {
    console.log(output.innerText)
    var answer = eval(output.innerText)
    output.innerText = answer
})

function printCharacter(character) {
    if (output.innerText === "Answer") {
        output.innerText = ""
    }
    output.innerText += character
}

