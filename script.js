
let id = Array.from({length: 10}, () => Math.floor(Math.random() * 826)) //generates a random array of 10 numbers 1-826.  Crediting Sara Searson for her guidance on this.

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

    let names1 = response.data[0].name
    gameContainer1.textContent = names1
    let pics1 = response.data[0].image
    picContainer1.setAttribute ('src', pics1)


    let names2 = response.data[1].name
    gameContainer2.textContent = (names2)
    let pics2 = response.data[1].image
    picContainer2.setAttribute ('src', pics2)

    let names3 = response.data[2].name
    gameContainer3.textContent = (names3)
    let pics3 = response.data[2].image
    picContainer3.setAttribute ('src', pics3)

    let names4 = response.data[3].name
    gameContainer4.textContent = (names4)
    let pics4 = response.data[3].image
    picContainer4.setAttribute ('src', pics4)

    let names5 = response.data[4].name
    gameContainer5.textContent = (names5)
    let pics5 = response.data[4].image
    picContainer5.setAttribute ('src', pics5)


    let names6 = response.data[5].name
    gameContainer6.textContent = (names6)
    let pics6 = response.data[5].image
    picContainer6.setAttribute ('src', pics6)


    let names7 = response.data[6].name
    gameContainer7.textContent = (names7)
    let pics7 = response.data[6].image
    picContainer7.setAttribute ('src', pics7)

    let names8 = response.data[7].name
    gameContainer8.textContent = (names8)
    let pics8 = response.data[7].image
    picContainer8.setAttribute ('src', pics8)


    let names9 = response.data[8].name
    gameContainer9.textContent = (names9)
    let pics9 = response.data[8].image
    picContainer9.setAttribute ('src', pics9)


    let names10 = response.data[9].name
    gameContainer10.textContent = (names10)
    let pics10 = response.data[9].image
    picContainer10.setAttribute ('src', pics10)

    let names11 = response.data[10].name
    gameContainer11.textContent = (names11)
    let pics11 = response.data[10].image
    picContainer11.setAttribute ('src', pics11)

    let names12 = response.data[11].name
    gameContainer12.textContent = (names12)
    let names13 = response.data[12].name
    gameContainer13.textContent = (names13)
    let names14 = response.data[13].name
    gameContainer14.textContent = (names14)
    let names15 = response.data[14].name
    gameContainer15.textContent = (names15)
    let names16 = response.data[15].name
    gameContainer16.textContent = (names16)
    let names17 = response.data[16].name
    gameContainer17.textContent = (names17)
    let names18 = response.data[17].name
    gameContainer18.textContent = (names18)
    let names19 = response.data[18].name
    gameContainer19.textContent = (names19)
    let names20 = response.data[19].name
    gameContainer20.textContent = (names20)

    
} 
characterCard()

function shuffleArray(array2) {
    for (let i = array2.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array2[i], array2[j]] = [array2[j], array2[i]] 
    }    
} 


//gives random number from 0-20 since the array is 20 elements long
//j is a random number between 0-20 (line 20). line 21 is saying that as array2 iterates through [i], javascript will swap the position of array2[i] with the position of array3[j]. Crediting Kevin Pham for his help with this and his explanation.

