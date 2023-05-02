import { cocktailsApi } from './apiConsuptio.js'
import { bringInformation } from './cocktailInformation.js'

const createCocktailCard = (cocktails) => {

    const cardContent = document.querySelector('#cardContent');

    while (cardContent.firstChild) {
        cardContent.removeChild(cardContent.firstChild);
    }

    const cardCreate = (cocktails) => {

        const cards = document.querySelector('#cardContent');

        const content = document.createElement('div');
        content.classList.add('cocktailCards');
        content.setAttribute('id', cocktails.idDrink);

        const imgElement = document.createElement('img');
        imgElement.classList.add('showCocktailPicture');
        imgElement.src = cocktails.strDrinkThumb
        imgElement.alt = `cocktail name - ${cocktails.strDrink}`

        content.appendChild(imgElement)

        const divTextContent = document.createElement('div');
        divTextContent.classList.add('tittle');

        const textElement = document.createElement('h1');
        textElement.classList.add('showCocktailName');
        textElement.textContent = cocktails.strDrink

        divTextContent.appendChild(textElement)

        content.appendChild(divTextContent)

        cards.appendChild(content)

        content.addEventListener('click', async () => {
            const clickCradsContent = content.id;
            console.log(clickCradsContent);
            bringInformation(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${clickCradsContent}`)
        })
    }

    cocktails.map(cardCreate)
}

export const showCocktails = async (urlApi) => {
    createCocktailCard(await cocktailsApi(urlApi))
}