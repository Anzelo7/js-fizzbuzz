console.log('JS GOD')

const containerHTMLElement = document.getElementById('container');

// ciclare i numeri da 1 a 100
for (let number = 1; number <= 100; number++) {


    // concateno a text Fizz e/o Buzz se divisibile per 3 e/o per 5
    let text = '';
    if (number % 3 === 0) {
        text += 'Fizz';
    }

    if (number % 5 === 0) {
        text += 'Buzz';
    }

    // stampo number se text non ha contenuto

    // è uguale all'if sopra -> condizione ? se vero : se falso
    const result = text.length > 0 ? text : number;
    console.log(result);

    // BONUS 1 - creo elementi
    const element = document.createElement('div');

    element.className = 'square';
    if (text.length > 0) {
        element.classList.add(text);
    }

    element.append(result); // è analogo a scriver element.innerHTML = result;   

    containerHTMLElement.append(element);
}