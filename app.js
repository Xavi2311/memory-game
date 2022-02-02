document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
      let avis = "You have clicked the same image!";
      historial(avis);
      vides();
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      let avis = "You found a match";
      historial(avis);
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
      let avis = "Sorry, try again";
      historial(avis);
      vides();
      //treurenom();//Cridem a la funcio per treure el nom
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      let avis = "Congratulations! You found them all";
      historial(avis);
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    //nomimatge(cardArray[cardId].name) //Cridem a la funcio pasant-li el parametre amb el nom de la carta
  }

  createBoard()
})
//

/*function canviarcolor(){
  const span = document.getElementsByTagName("span");
  span.style.color("blue");
}
const grid = document.getElementsByClassName("grid");
grid.addEventListener("mouseover",canviarcolor());*/

//Exercici2
function nomimatge(nom){
  console.log(nom);
  document.getElementById("nom").innerHTML=(nom);
}
function treurenom(){
document.getElementById("nom").innerHTML=("");
}

//Exercici 3
var contadorvides=4;

  function vides(){
    
    contadorvides--
    console.log(contadorvides)
    document.getElementById("Vides").innerHTML=("Vides:"+contadorvides);
    if (contadorvides==-1){
      eliminado();
    }
  }
  function eliminado(){
    document.getElementById("Vides").innerHTML=("Vides:"+contadorvides);
    alert("Has perdut Xavi Arjona");
    let avis = "Has perdut Xavi Arjona";
      historial(avis);
    contadorvides=4;
    document.getElementById("Vides").innerHTML=("Vides:"+contadorvides);
  }
  
  //Exercici4
  var accio=1;
  var eventos=[];
  function historial(missatge){
    eventos.push("Acció"+(accio)+":"+missatge);
    console.log(eventos);
    accio++;
  }

  function mostrarhistorial(){

      for (let i = 0; i < eventos.length; i++){
      const texto = document.createElement('p');
      texto.innerText = (eventos[i]);
      logs.appendChild(texto);
    }
    console.log("Va")
  }