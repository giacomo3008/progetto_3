/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

console.log("---ESERCIZI A,B,C,D,E,F");
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10+20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = { 
  name: 'Giacomo', 
  surname: 'Rigo', 
  age: 22 
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = [
  "HTML",
  "JavaScript",
  "CSS",
  "Java",
  "C/C++",
  "Python",
  "Assembly"
];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Scratch");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("---ESERCIZIO 1---");
function dice(){
  return Math.floor(Math.random()*6)+1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("---ESERCIZIO 2---");
const a = 5;
const b = 7;
console.log(whoIsBigger(a,b));

function whoIsBigger(a,b){
  if(a>b){
    return a;
  }else{
    return b;
  }
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("---ESERCIZIO 3---");
const string = "ciao io mi chiamo giacomo";
console.log(splitMe(string));

function splitMe(str){
  const arr = string.split(" ");
  return arr;
}

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("---ESERCIZIO 4---");
const string1 = "Giacomo";
const boolean = false;
console.log(deleteOne(string1,boolean));

function deleteOne(str,bool){
  if(bool){
    return str.slice(1);
  }else{
    return str.substring(0,str.length-1);
  }
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("---ESERCIZIO 5---");
const string2 = "ciao io 4 mi chiamo 6 Giacomo";
console.log(onlyLetters(string2));

function onlyLetters(str){
  return str.replace(/\d/g, '');
}

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("---ESERCIZIO 6---");
const email = "eref@erg.ce";
console.log(isThisAnEmail(email));

function isThisAnEmail(str){
  //senza usare regex
  const indexSnail = str.indexOf("@");
  const indexDot = str.indexOf(".");
  if(indexSnail > 0 && indexDot > indexSnail){ //in modo da avere una mail del tipo: "____@__.__"
    return true;
  }else{
    return false;
  }

  //con regex:
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // return emailRegex.test(email);
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("---ESERCIZIO 7---");
console.log(whatDayIsIt());

function whatDayIsIt(){
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("---ESERCIZIO 8---");
const time = 5;
console.log(rollTheDices(time));

function rollTheDices(times){
  const ogg = {
    arr: [],
    sum: 0
  };
  for(let i=0; i<=times; i++){
    const num = dice();
    ogg.arr.push(num);
    ogg.sum += num;
  }
  return `sum: ${ogg.sum},\narray: ${ogg.arr}`;
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("---ESERCIZIO 9---");
const date = new Date("2005-03-25");
console.log(howManyDays(date));

function howManyDays(date){
  const now = new Date();
  const days = Math.round(Math.abs((now-date)/1000/60/60/24));
  return `giorni: ${days}`;
}

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("---ESERCIZIO 10---");
const myBirth = new Date("2002-08-30");
console.log(isTodayMyBirthday(myBirth));

function isTodayMyBirthday(birth){
  const now = new Date();
  return now.getDay() === birth.getDay() && now.getMonth() === birth.getMonth();
}


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("---ESERCIZIO 11---");
const ogg2 = {
  uno: "ciao",
  due: "io",
  tre: "sono"
};
const property = "due";
console.log(deleteProp(ogg2,property));

function deleteProp(ogg,str){ 
  delete ogg[str];
  return ogg;
}
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("---ESERCIZIO 12---");
console.log(newestMovie());

function newestMovie(){
  let newest = movies[0];
  for(let i=1; i<movies.length; i++){
    if(parseInt(newest.Year) > parseInt(movies[i].Year)){
      newest = movies[i];
    }
  }
  return newest.Title;
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("---ESERCIZIO 13---");
console.log(countMovies());

function countMovies(){
  return movies.length;
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("---ESERCIZIO 14---");
console.log(onlyTheYears());

function onlyTheYears(){
  return movies.map(movie => movie.Year);
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("---ESERCIZIO 15---");
console.log(onlyInLastMillennium());
function onlyInLastMillennium(){
  return movies.filter(movie => parseInt(movie.Year) < 2000);
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("---ESERCIZIO 16---");
console.log(sumAllTheYears());
function sumAllTheYears() {
  return movies.reduce((sum, movie) => sum + parseInt(movie.Year), 0);
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("---ESERCIZIO 17---");
const title = "Lord";
console.log(searchByTitle(title));

function searchByTitle(tit) {
  return movies.filter(movie => movie.Title.toLowerCase().includes(tit.toLowerCase()));
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("---ESERCIZIO 18---");
const title1 = "Lord";
console.log(searchAndDivide(title1));

function searchAndDivide(str){
  const obj = {
    match: [],
    unmatch: []
  };
  obj.match = movies.filter(movie => movie.Title.toLowerCase().includes(str.toLowerCase()));
  obj.unmatch = movies.filter(movie => !movie.Title.toLowerCase().includes(str.toLowerCase()));
  return obj;
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("---ESERCIZIO 19---");
const ind = 4;
console.log(removeIndex(ind));

function removeIndex(i){
  return movies.slice(0, i).concat(movies.slice(i + 1));
}


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


function selector() {
  return document.getElementById("container");
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all"interno della pagina.
*/


function selectorTd() {
  return document.querySelectorAll("td");
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all"interno della pagina.
*/


function consoleTd() {
  document.querySelectorAll("td").forEach(td => console.log(td.textContent));
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all"interno della pagina.
*/


function redBackground() {
  document.querySelectorAll("a").forEach(link => link.style.backgroundColor = "red");
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/


function addToList(){
  const myList = document.getElementById("myList");
  const newItem = document.createElement("li");
  newItem.textContent = "";
  myList.appendChild(newItem);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/


function emptyList() {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassTest() {
  document.querySelectorAll("tr").forEach(tr => tr.classList.add("test"));
}



// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell"altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("---ESERCIZIO 27---");
const height = 7;
console.log(halfTree(height));

function halfTree(height){
  let str = "";
  //con il metodo repeat:
  for (let i = 1; i <= height; i++) {
    str = str + "*".repeat(i) + "\n";
  }

  //secondo metodo
  // for(let i=1; i<=height; i++){
  //   for(let j=0; j<i; j++){
  //     str += "*";
  //   }
  //   str += "\n";
  // }
  return str;
}

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell"altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
*/

console.log("---ESERCIZIO 28---");
const height2 = 15;
console.log(tree(height2));

function tree(height){
  let str = "";
  const numFoglie = 2*height-1;
  for (let i = 1; i <= height; i++) {
    str = str + " ".repeat((numFoglie - (2*i-1))/2) + "*".repeat(2*i-1) + "\n";
  }
  return str;
}

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("---ESERCIZIO 29---");
const isPrime = 71;
console.log(isItPrime(isPrime));

function isItPrime(num){
  for(let i=2; i<Math.sqrt(num); i++){
    if(num%i === 0){
      return true;
    }
  }
  return false;
}

