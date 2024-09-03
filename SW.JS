
"use strict"

let characterList = [];

function fetchAllCharacters() {    
    const url = "https://akabab.github.io/starwars-api/api/all.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            characterList = data;
            console.log(`Fetched ${characterList.length} characters`);
            updateButtonState();
        })
        .catch(error => {
            console.error(`Error fetching characters:`, error);
            updateButtonState();
        });
}

fetchAllCharacters();

function updateButtonState() {
    const button = document.querySelector("#but");
    button.disabled = characterList.length === 0;

}



const button = document.querySelector("#but");
const element = document.getElementById("randomNumber")
const element1 = document.getElementById("hair_color")
const element2 = document.getElementById("birth_year")
const element3 = document.getElementById("Gender")
const element4 = document.getElementById("image");





    button.addEventListener('click', () => {

        const randomIndex = Math.floor(Math.random() * characterList.length);
        const character = characterList[randomIndex];
    
        element.innerHTML = `Name: ${characterList[randomIndex].name}`;
        element1.innerHTML = `Hair-color: ${characterList[randomIndex].hairColor}`;
        element2.innerHTML = `Birth year:  ${characterList[randomIndex].born}`;
        element3.innerHTML = `Gender:  ${characterList[randomIndex].gender}`;
        element4.innerHTML = `<img src="${character.image}" alt="${character.name}" style="max-width: 200px;">`
    });





updateButtonState()











