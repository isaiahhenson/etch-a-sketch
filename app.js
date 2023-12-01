let bigBoyContainer = document.createElement('div')
let anotherDiv = document.createElement('div')
let container = document.querySelector('.container-div');
let button = document.createElement('button')
let childDiv;
let children = [];

bigBoyContainer.classList.add('bigBoy')

//styling another div
anotherDiv.style.border = "2px solid black";
anotherDiv.style.justifyContent = "center"
anotherDiv.style.width = "100%"
anotherDiv.style.height = "75px"
anotherDiv.style.display = "flex"

//styling button
button.style.border = "2px solid black";
button.style.height = "75px";
button.style.width = "125px";
button.textContent = "button"

//styling container
container.style.border = "2px solid black";
container.style.justifyContent = "center"
container.style.maxWidth = "600px"
container.style.minWidth = "600px"
container.style.maxHeight = "600px"
container.style.minHeight = "600px"

//styling main container
bigBoyContainer.style.border = "2px solid black";
bigBoyContainer.style.display = "flex"
bigBoyContainer.style.justifyContent = "center"
bigBoyContainer.style.height = "100vh"

//appending element to the body element
document.body.appendChild(bigBoyContainer)
bigBoyContainer.appendChild(container)
container.appendChild(anotherDiv)
anotherDiv.appendChild(button)

//appending child elements to the container div
//made variables global to access them with in the loops
//pushed each appended element into a node array to loop through later

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



