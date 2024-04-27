let main = document.querySelector('main');
let insideContainer = document.createElement('div');
let screen = document.createElement('div');
let select = document.createElement('button');
let select_p = document.createElement('p');

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
screen.style.display = 'flex';
screen.style.flexWrap = 'wrap';

select.style.border = '1px solid black';
select.style.height = '25px';
select.style.width = '100px';
select.style.backgroundColor = 'white';
select.style.position = 'absolute';
select.style.top = '50px';

select.appendChild(select_p);

select_p.style.marginTop = '6px';
select_p.style.marginBottom = '0';

select_p.textContent = 'Select';

main.appendChild(select);
main.appendChild(insideContainer);
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
  insideContainer.remove();
  let userInput = prompt('Grid # Chooice: Limit 100');
  console.log(userInput);

  for (let i = 1; i <= userInput; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.style.border = '1px solid black';
    gridSquare.style.height = '6.25%';
    gridSquare.style.width = '6.25%';

    screen.appendChild(gridSquare);

    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.backgroundColor = 'black';
    });
  }
});
