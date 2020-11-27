let arrayOfQuotes;
let numberOfQuotes=0;

fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {arrayOfQuotes = data;
        getNumberofQuotes();
        button.addEventListener('click',updateDOM);
    } )
    .catch(err => console.log(err));



const getNumberofQuotes = () => {
    arrayOfQuotes.forEach(() => {
        numberOfQuotes++;
    })
}

const updateDOM = () => {
    const randomNumber = getRandomNumber();
    const quote = arrayOfQuotes[`${randomNumber}`]["text"];
    const author = arrayOfQuotes[`${randomNumber}`]["author"];
    
    quoteEl.innerHTML = `"${quote}"`;
    authorEl.innerHTML = `${author}`;

}

const getRandomNumber = () => {
    return Math.floor(Math.random()*(numberOfQuotes+1));
}

const authorEl = document.querySelector('.author').querySelector('span');
const quoteEl = document.querySelector('p');
const button = document.querySelector('button');

