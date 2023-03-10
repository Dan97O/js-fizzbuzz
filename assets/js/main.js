/* Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
3. Facciamo attenzione all'ordine delle condizioni che usiamo
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
`append()` oppure
`.innerHTML`
`.insertAdjacentHTML()`
A voi la scelta
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */

// programma num 1/100 --> multipli di 3 stampa FIZZ --> multipli di 5 BUZZ --> per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

/* strumenti:
- let / const
- for 
- if
- % 
- console.log
*/

const containerElement = document.createElement('div');
const rowElement = document.createElement('div');


containerElement.classList.add('container');
rowElement.classList.add('row');


document.body.prepend(containerElement);
containerElement.append(rowElement)

colElementinnerText = 'FizzBuzz DOM'



// programma num 1/100 --> multipli di 3 stampa FIZZ --> multipli di 5 BUZZ --> per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
for(let i = 1; i <= 100; i++ ){

  const colElement = document.createElement('div')
  colElement.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'col-3', 'col-md-2', 'col_lg_1', 'fs-1', 'square')
  if(i % 3 == 0 && i % 5 == 0 ){
    console.log('FizzBuzz')
    colElement.innerText = 'FizzBuzz'
    colElement.style.color = "white"
    colElement.classList.add("fizzbuzz")
  } else if (i % 3 == 0){
    console.log('Fizz')
    colElement.innerText = 'Fizz'
    colElement.style.color = "red"
    colElement.classList.add("fizz")


  } else if (i % 5 == 0){
    console.log('Buzz')
    colElement.innerText = 'Buzz'
    colElement.style.color = "blue"
    colElement.classList.add("buzz")

  } else{
    colElement.innerText = i
    console.log(i)
  }

  rowElement.append(colElement)

}