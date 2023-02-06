(function generateCharacters() {
    //select main container
    const mainContainer = document.querySelector('.container');
    
    fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then((data) => data.results)
        .then((characters) => {
            characters.forEach(character => {
                mainContainer.appendChild(generateCharacterCard(character));
            });
        })
        .catch((e) => console.log(e));
        
})()

const generateCharacterCard = (character) => {
    const { location } = character;
    const { name, image } = character;
    //create character card
    const characterCard = document.createElement('article');
    //create image section
    const characterImg = document.createElement('img'); 
    //create name section
    const characterNameSpan = document.createElement('span');
    const characterTitleName = document.createElement('p');
    const characterName = document.createElement('h2');
    //create location section
    const characterLocSpan = document.createElement('span');
    const characterTitleLoc = document.createElement('p');
    const characterLoc = document.createElement('h2');
    characterCard.setAttribute('class', 'charactercard');
    //class character card 
    characterImg.setAttribute('class', 'charactercard__image');
    //class name section
    characterNameSpan.setAttribute('class', 'charactercard__name');
    characterTitleName.setAttribute('class', 'charactercard__titlename');
    characterName.setAttribute('class', 'charactercard__nameh2');
    //class location section
    characterLocSpan.setAttribute('class', 'charactercard__location');
    characterTitleLoc.setAttribute('class', 'charactercard__titleloc');
    characterLoc.setAttribute('class', 'charactercard__loc');
    //entry text content to the elements
    //add character image url to the characterImg
    characterImg.setAttribute('src', `${image}`);
    //name section
    characterTitleName.textContent = 'Name: ';
    characterName.textContent = `${name}`;
    //location section
    characterTitleLoc.textContent = 'Location: ';
    characterLoc.textContent = `${location.name}`;
    //add childs to the span elements and character card
    //add childs to name section span
    characterNameSpan.appendChild(characterTitleName);
    characterNameSpan.appendChild(characterName);
    //add childs to location section span
    characterLocSpan.appendChild(characterTitleLoc);
    characterLocSpan.appendChild(characterLoc);
    //add childs to character card
    characterCard.appendChild(characterImg);
    characterCard.appendChild(characterNameSpan);
    characterCard.appendChild(characterLocSpan);
    //add character card to the main container
    return characterCard;
}

