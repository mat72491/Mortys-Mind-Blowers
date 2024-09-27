
let id = Array.from({length: 10}, () => Math.floor(Math.random() * 826)) //generates a random array of 10 numbers 1-826

let array1 = [] 
let array2 = []
let array3 = []

let characterCard = async () => {
    let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`) 
    array1 = response.data
    array2 = response.data
    array3 = [...array1, ...array2]
    shuffleArray(array3)
    console.log(array3)
} 
characterCard()

function shuffleArray(array3) {
    for (let i = array3.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //gives random number from 0-20 since the array is 20 units long
        [array3[i], array3[j]] = [array3[j], array3[i]]//j is a random number between 0-20 (line 20). line 21 is saying that as array3 iterates through [i], javascript will swap the position of array3[i] with the position of array3[j]
    }    
} 




