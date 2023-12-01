let bigBoyContainer = document.createElement('div')
bigBoyContainer.classList.add('bigBoy')

let container = document.querySelector('.container-div');

//appending element to the body element

document.body.appendChild(bigBoyContainer)
bigBoyContainer.appendChild(container)

//appending child elements to the container div
//made variables global to access them with in the loops
//pushed each appended element into a node array to loop through later
let childDiv;
let children = [];
for (let i = 0; i < 16; i++){
     childDiv = document.createElement('div')
    childDiv.style.border = "2px solid black";
    childDiv.style.height = "120px";
    childDiv.style.width = "110px";

    container.appendChild(childDiv);
    children.push(childDiv);
}
console.log(children)


//select all the childDiv elements
//loop through
//add event handlers

children.forEach(e => {
    console.log(e)
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = "lightBlue";
    })
});

children.forEach(e => {
    console.log(e)
    e.addEventListener('mouseout', () => {
        e.style.backgroundColor = "";
    })
});




container.style.border = "2px solid black";
container.style.justifyContent = "center"
container.style.maxWidth = "600px"
container.style.minWidth = "600px"


bigBoyContainer.style.border = "2px solid black";
bigBoyContainer.style.display = "flex"
bigBoyContainer.style.justifyContent = "center"



