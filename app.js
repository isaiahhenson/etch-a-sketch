let main = document.querySelector('main');
let insideContainer = document.createElement('div');
let screen = document.createElement('div');
let select = document.createElement('div');
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
