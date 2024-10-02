
let id = Array.from({length: 10}, () => Math.floor(Math.random() * 826)) //generates a random array of 10 numbers 1-826

const gameContainer1 = document.querySelector('#gameContainer1')
const gameContainer2 = document.querySelector('#gameContainer2')
const gameContainer3 = document.querySelector('#gameContainer3')
const gameContainer4 = document.querySelector('#gameContainer4')
const gameContainer5 = document.querySelector('#gameContainer5')
const gameContainer6 = document.querySelector('#gameContainer6')
const gameContainer7 = document.querySelector('#gameContainer7')
const gameContainer8 = document.querySelector('#gameContainer8')
const gameContainer9 = document.querySelector('#gameContainer9')
const gameContainer10 = document.querySelector('#gameContainer10')
const gameContainer11 = document.querySelector('#gameContainer11')
const gameContainer12 = document.querySelector('#gameContainer12')
const gameContainer13 = document.querySelector('#gameContainer13')
const gameContainer14 = document.querySelector('#gameContainer14')
const gameContainer15 = document.querySelector('#gameContainer15')
const gameContainer16 = document.querySelector('#gameContainer16')
const gameContainer17 = document.querySelector('#gameContainer17')
const gameContainer18 = document.querySelector('#gameContainer18')
const gameContainer19 = document.querySelector('#gameContainer19')
const gameContainer20 = document.querySelector('#gameContainer20')

const picContainer1 = document.querySelector('#picContainer1')
const picContainer2 = document.querySelector('#picContainer2')
const picContainer3 = document.querySelector('#picContainer3')
const picContainer4 = document.querySelector('#picContainer4')
const picContainer5 = document.querySelector('#picContainer5')
const picContainer6 = document.querySelector('#picContainer6')
const picContainer7 = document.querySelector('#picContainer7')
const picContainer8 = document.querySelector('#picContainer8')
const picContainer9 = document.querySelector('#picContainer9')
const picContainer10 = document.querySelector('#picContainer10')
const picContainer11 = document.querySelector('#picContainer11')
const picContainer12 = document.querySelector('#picContainer12')
const picContainer13 = document.querySelector('#picContainer13')
const picContainer14 = document.querySelector('#picContainer14')
const picContainer15 = document.querySelector('#picContainer15')
const picContainer16 = document.querySelector('#picContainer16')
const picContainer17 = document.querySelector('#picContainer17')
const picContainer18 = document.querySelector('#picContainer18')
const picContainer19 = document.querySelector('#picContainer19')
const picContainer20 = document.querySelector('#picContainer20')

let array1 = [] 
let array2 = []

let characterCard = async () => {
    let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`) 
    array1 = response.data
    array2 = [...array1, ...array1]
    shuffleArray(array2)
    console.log(array2)

    let names1 = array2[0].name
    gameContainer1.textContent = names1
    let pics1 = array2[0].image
    picContainer1.setAttribute ('src', pics1)

    let names2 = array2[1].name
    gameContainer2.textContent = (names2)
    let pics2 = array2[1].image
    picContainer2.setAttribute ('src', pics2)

    let names3 = array2[2].name
    gameContainer3.textContent = (names3)
    let pics3 = array2[2].image
    picContainer3.setAttribute ('src', pics3)

    let names4 = array2[3].name
    gameContainer4.textContent = (names4)
    let pics4 = array2[3].image
    picContainer4.setAttribute ('src', pics4)

    let names5 = array2[4].name
    gameContainer5.textContent = (names5)
    let pics5 = array2[4].image
    picContainer5.setAttribute ('src', pics5)


    let names6 = array2[5].name
    gameContainer6.textContent = (names6)
    let pics6 = array2[5].image
    picContainer6.setAttribute ('src', pics6)


    let names7 = array2[6].name
    gameContainer7.textContent = (names7)
    let pics7 = array2[6].image
    picContainer7.setAttribute ('src', pics7)

    let names8 = array2[7].name
    gameContainer8.textContent = (names8)
    let pics8 = array2[7].image
    picContainer8.setAttribute ('src', pics8)


    let names9 = array2[8].name
    gameContainer9.textContent = (names9)
    let pics9 = array2[8].image
    picContainer9.setAttribute ('src', pics9)

    let names10 = array2[9].name
    gameContainer10.textContent = (names10)
    let pics10 = array2[9].image
    picContainer10.setAttribute ('src', pics10)


    let names11 = array2[10].name
    gameContainer11.textContent = (names11)
    let pics11 = array2[10].image
    picContainer11.setAttribute ('src', pics11)
    

    let names12 = array2[11].name
    gameContainer12.textContent = (names12)
    let pics12 = array2[11].image
    picContainer12.setAttribute ('src', pics12)

    let names13 = array2[12].name
    gameContainer13.textContent = (names13)
    let pics13 = array2[12].image
    picContainer13.setAttribute ('src', pics13)

    let names14 = array2[13].name
    gameContainer14.textContent = (names14)
    let pics14 = array2[13].image
    picContainer14.setAttribute ('src', pics14)


    let names15 = array2[14].name
    gameContainer15.textContent = (names15)
    let pics15 = array2[14].image
    picContainer15.setAttribute ('src', pics15)

    let names16 = array2[15].name
    gameContainer16.textContent = (names16)
    let pics16 = array2[15].image
    picContainer16.setAttribute ('src', pics16)


    let names17 = array2[16].name
    gameContainer17.textContent = (names17)
    let pics17 = array2[16].image
    picContainer17.setAttribute ('src', pics17)


    let names18 = array2[17].name
    gameContainer18.textContent = (names18)
    let pics18 = array2[17].image
    picContainer18.setAttribute ('src', pics18)

    let names19 = array2[18].name
    gameContainer19.textContent = (names19)
    let pics19 = array2[18].image
    picContainer19.setAttribute ('src', pics19)

    let names20 = array2[19].name
    gameContainer20.textContent = (names20)
    let pics20 = array2[19].image
    picContainer20.setAttribute ('src', pics20)
    
} 
characterCard()

function shuffleArray(array2) {
    for (let i = array2.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //gives random number from 0-20 since the array is 20 elements long
        [array2[i], array2[j]] = [array2[j], array2[i]] //j is a random number between 0-20. as array2 iterates through [i], javascript will swap the position of array2[i] with the position of array3[j]. Crediting Kevin Pham.
    }    
} 

const back = document.querySelectorAll(".back")
const front = document.querySelectorAll(".front")
const restartButton = document.getElementById("#restartButton")
let openCardArray = []
let flipped = document.getElementsByClassName(".flipped")
const score1 = document.querySelector(".player1")
const score2 = document.querySelector(".player2")
let scorePlayer1 = 0
let scorePlayer2 = 0
let matchedCards = []
let history = []
let currentplayer = "Player1"

function playerChange (){
    currentPlayer = (currentPlayer == "Player1") ?
    "Player2" : "Player1"
}

back.forEach(card => {
    card.addEventListener('click', (e) => {
        handleClick(e, card)
             }
        )
    }
)
let compareCard1 = ""
let compareCard2 = ""

function handleClick (e, card){
if (compareCard1 == "") {
    compareCard1 = card
}   else {
    compareCard2 = card
}
    console.log(compareCard1)
    console.log(compareCard2)
    // console.log(e.target)
    // card.classList.toggle('solved')
    card.style.opacity = 1
    card.classList.toggle('flipped')
    // console.log(card)
    if (e) {
    openCardArray.push(e.target.src)
    } 
    
    if (flipped = true && openCardArray[0] === openCardArray[1] && openCardArray.length % 2 === 0){
        console.log("match")
        compareCard1.classList.toggle('solved')
        compareCard2.classList.toggle('solved')
        openCardArray.splice(0,openCardArray.length)
       compareCard1 = ""
       compareCard2 = ""
    } 
    
    else if (flipped = true && openCardArray[0] !== openCardArray[1] && openCardArray.length % 2 === 0){
            back.forEach(item => setTimeout(() => {
                // console.log(item)
            if (!item.classList.contains('solved')){
                item.style.opacity = 0
                item.classList.remove('flipped')
                // console.log(card)
            }
            }, 4000))
            openCardArray.splice(0,openCardArray.length)
            console.log("no match")
             compareCard1 = ""
             compareCard2 = ""
            // console.log(openCardArray)
         }
    }


   
  

//     function checkMatch(){
//         if (openCardArray[0] === openCardArray[1]) {
//             console.log('match')}
//          else if (openCardArray[0] !== openCardArray[1]) {
//             unflipCards()
//             console.log(openCardArray)
//         }
//     }

   


//     // let isMatch = openCardArray[0] === openCardArray[1]
//     // isMatch ? disableCards() : unflipCards ()
//     // }

// // function disableCards() {
// //     firstCard.removeEventListener('click',flipCard)
// //     secondCard.removeEventListener("click", flipCard)
// // }
// // //     resetBoard()
// // // }

// // }
// //    function resetBoard(){
// //     firstCard = null
// //     secondCard = null
// //     pauseGame = false
// //    }

 





