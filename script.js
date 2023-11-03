window.onload = (event) => {
    let sides = 20
    createGrid(sides)
};

let etch = document.querySelector("#etchContainer")
let etchChildren = document.getElementsByClassName("etchDiv")
let numBox = document.querySelector("#sides")
let resetButton = document.querySelector("#resetButton")

numBox.addEventListener('change', (event) => {
    createGrid(event.target.value)
});

resetButton.addEventListener('click', (event) => {
    resetColor(event);
})


let createGrid = sideNum => {
    if (etchChildren.length > 0) {
        etch.replaceChildren()
    }
    for (let i = 0; i < sideNum * sideNum; i++) {
        let nestedDiv = document.createElement("div")
        nestedDiv.classList.add("etchDiv", "etchDivStart")
        nestedDiv.addEventListener("mouseover",function(event) {
            toggleColor(event)
        })
        etch.appendChild(nestedDiv);
    }
    etch.setAttribute("style",`grid-template-rows: repeat(${sideNum},1fr);`)
    etch.setAttribute("style",`grid-template-columns: repeat(${sideNum},1fr);`)
}

let toggleColor = event => {
    let state = event.target.classList[1]
    
    if (state == "etchDivStart"){
        event.target.classList.remove("etchDivStart")
        event.target.classList.add("etchDivOver")
    } else if (state = "etchDivOver"){
        event.target.classList.add("etchDivStart")
        event.target.classList.remove("etchDivOver")
    }
}

let resetColor = event => {
    event.preventDefault()
    for (let i = 0; i < etch.childElementCount; i++) {    
        if (etchChildren[i].classList[1] == "etchDivOver"){
            etchChildren[i].classList.remove("etchDivOver")
            etchChildren[i].classList.add("etchDivStart")
        }
    }
}


