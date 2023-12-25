
let numSquares = 256;

(function createSquares(num){
  let containerDiv = document.querySelector('.container-div')
  containerDiv.style.border = '2px solid red'
  containerDiv.style.maxWidth = '500px'

  let gridWidth = '27px';
  let gridHeight = '27px';

  for (let i = 0; i < numSquares; i++){

    let gridDiv = document.createElement('div') 
    gridDiv.style.border = '2px solid black'
    gridDiv.style.height = gridHeight
    gridDiv.style.width = gridWidth

    gridDiv.addEventListener('mouseenter', function(){
      gridDiv.style.background = 'black';
    })

    containerDiv.appendChild(gridDiv)
  }


})(16)

// createSquares(numSquares)

//----------------------------------------------------