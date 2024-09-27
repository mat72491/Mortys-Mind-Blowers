# Mortys-Mind-Blowers
A Rick and Morty themed matching card game

## About:
This project consists of 20 cards (10 pairs of two matching cards) utlilizing images from the [Rick and Morty API](https://rickandmortyapi.com/api/character).
10 pairs of random characters will be pulled from the API and placed onto random cards made using HTML and CSS.  Two arrays of the 10 characters will be created and sorted using a combination of .sort and Math.random.

On the backend, a log of which characters was clicked on will need to be kept, and two matching characters should be logged and removed from play.  
If the first card =/= the second card, both cards will need to be flipped back over.

The game will keep track of how many matches each player gets.  There will be a restart button.

## Thunder Client sample API pull:

"id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

## Rules Logic:
If the images on chosen cards (card X and card Y) match, the player will go again and the matched cards will be removed from the game.
Otherwise, it is the next player's turn.
No more than two cards can be clicked at a time.
The player with the most matching pairs wins the game.

## Stretch Goals:
Track overall wins/losses.
Create alternating card/deck styles (similar to a light/dark mode but with a Rick and Morty theme).
Flip animation.

## Mockup
[Morty's Mind Blowers](https://app.diagrams.net/#G12JxnBf_XNUrOYAfkKyj1_hZ5U1KIKv5B#%7B%22pageId%22%3A%229d5HRlu2v2suHHkRnHFg%22%7D)



