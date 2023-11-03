window.onload = (event) => {
    let sides = 20
    createGrid(sides)
};

let etch = document.querySelector("#etchContainer")
let etchChildren = document.getElementsByClassName("etchDiv")
let numBox = document.querySelector("#sides")
let resetButton = document.querySelector("#resetButton")