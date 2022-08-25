console.log('JS GOD')
const grid = document.getElementById('grid');

for (let squareIndex = 1; squareIndex <= 100; squareIndex++) {
    const element = document.createElement('div');

    element.append(squareIndex.toFixed());
    element.className = 'bg-green big';
    //   element.classList.add('bg-green');

    element.style.textAlign = 'center';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'center';



    element.addEventListener('mouseleave', function () {
        console.log('esco da ' + squareIndex);
        element.style.backgroundColor = 'greenyellow';
    });


    grid.append(element);
}

let squareIndextre = squareIndex * 3
let squareIndexcinque = squareIndex * 5

switch (multiplisquareIndex) {
    case squareIndextre:
        documet.getElementById('grid').src = 'Fizz'
        break;
    case squareIndexcinque:
        documet.getElementById('grid').src = 'Buzz'
        break;
}