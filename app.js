let main = document.querySelector('main');

let insideContainer = document.createElement('div');
let screen = document.createElement('div');

insideContainer.style.border = '1px solid black';
insideContainer.style.height = '50%';
insideContainer.style.width = '50%';
insideContainer.style.backgroundColor = 'red';
insideContainer.style.display = 'flex';
insideContainer.style.alignItems = 'center';
insideContainer.style.justifyContent = 'center';

screen.style.border = '1px solid black';
screen.style.height = '70%';
screen.style.width = '70%';
screen.style.backgroundColor = 'grey';

main.appendChild(insideContainer);
insideContainer.appendChild(screen);
