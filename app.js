let player1;
let player2;

let input = prompt("Head or Tail", "Head").toLowerCase()
let btn1 = document.getElementById("player1")
let btn2 = document.getElementById("player2")
if (input === "head") {
    player1 = "head"
    player2 = "tail"
} else if (input === "tail") {
    player1 = "tail"
    player2 = "head";
} else {
    alert("Invalid input")
}

function toss() {
    let text = document.getElementById("text")

    let randomNm = Math.floor(Math.random() * 7)
    console.log(randomNm)
    if (randomNm % 2 === 0) {
        text.innerHTML = "Player 1 Win the Toss"
        btn2.setAttribute("disabled", false);
    } else {
        text.innerHTML = "Player 2 Win the Toss"
        btn1.setAttribute("disabled", false);
    }
}
function game() {
    let div1 = document.getElementById("div1")
    let div2 = document.getElementById("div2")

    let result = document.getElementById("result")
    let random1 = Math.floor(Math.random() * 7)
    let random2 = Math.floor(Math.random() * 7)

    div1.innerText = random1
    div2.innerText = random2
    console.log(div1.innerHTML)
    console.log(div2.innerHTML)

    if (random1 === 6 || random2 === 6) {
        result.innerHTML = "You won"
    } else {
        btn2.removeAttribute("disabled", true);
        btn1.setAttribute("disabled", true)
    }
    // if (random1 !== 6 || random2 !== 6) {
    //     btn1.removeAttribute("disabled", true);
    //     btn2.setAttribute("disabled", true)
    // }


}