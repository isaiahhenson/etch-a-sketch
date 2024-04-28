let main = document.querySelector('main');
let insideContainer = document.createElement('div');
let screen = document.createElement('div');
let select = document.createElement('button');
let nob = document.createElement('div');
let nob2 = document.createElement('div');
let select_p = document.createElement('p');

insideContainer.style.border = '1px solid black';
insideContainer.style.paddingBottom = '50px';
insideContainer.style.height = '50%';
insideContainer.style.width = '50%';
insideContainer.style.backgroundColor = 'red';
insideContainer.style.display = 'flex';
insideContainer.style.alignItems = 'center';
insideContainer.style.justifyContent = 'center';
insideContainer.style.borderRadius = '5%';

screen.style.border = '1px solid black';
screen.style.height = '70%';
screen.style.width = '70%';
screen.style.backgroundColor = 'grey';
screen.style.display = 'flex';
screen.style.flexWrap = 'wrap';
// screen.style.flexDirection = 'column';

select.style.border = '1px solid black';
select.style.height = '25px';
select.style.width = '100px';
select.style.backgroundColor = 'white';
select.style.position = 'absolute';
select.style.top = '50px';

nob.style.width = '45px';
nob.style.height = '45px';
nob.style.borderRadius = '50%';
nob.style.backgroundColor = 'white';
nob.style.position = 'absolute';
nob.style.bottom = '155px';
nob.style.right = '320px';

nob2.style.width = '45px';
nob2.style.height = '45px';
nob2.style.borderRadius = '50%';
nob2.style.backgroundColor = 'white';
nob2.style.position = 'absolute';
nob2.style.bottom = '155px';
nob2.style.left = '320px';

select_p.style.marginTop = '6px';
select_p.style.marginBottom = '0';

select_p.textContent = 'Select';

main.appendChild(select);
main.appendChild(insideContainer);
insideContainer.appendChild(nob);
insideContainer.appendChild(nob2);
select.appendChild(select_p);
insideContainer.appendChild(screen);

//create div
//create 16 by 16 grid by looping and creating that div 256 times

for (let i = 1; i <= 256; i++) {
  let gridSquare = document.createElement('div');
  gridSquare.style.border = '1px solid black';
  gridSquare.style.height = '6.25%';
  gridSquare.style.width = '6.25%';

  screen.appendChild(gridSquare);

  gridSquare.addEventListener('mouseover', () => {
    gridSquare.style.backgroundColor = 'black';
  });
}

select.addEventListener('click', () => {
  screen.innerHTML = '';
  let userInput = +prompt('Grid # Chooice: Limit 100');
  for (let i = 1; i <= userInput * userInput; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.style.border = '1px solid black';
    gridSquare.style.height = `${screen.clientHeight / userInput}px`;
    gridSquare.style.width = `${screen.clientWidth / userInput}px`;
    gridSquare.style.flexGrow = '1';
    gridSquare.style.flexShrink = '1';

    screen.appendChild(gridSquare);

    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'black';
    });
  }
  screen.style.overflow = 'hidden';
});

//prompt user, prompt()
//store input, variable
//replace w/newgrid using input, event handler.
//
