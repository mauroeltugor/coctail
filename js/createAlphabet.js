import { showCocktails } from './showCocktails.js'

export const alphabetCreate = () => {

    const contentElement = document.querySelector('#content');

    for (let i = 65; i <= 90; i++) {

        const letterElement = document.createElement('li');
        letterElement.classList.add('alphabetContent');

        letterElement.addEventListener('click', async () => {
            const click = letterElement.innerHTML

            const categoryNmae = document.querySelector('#mainTitle')
            categoryNmae.textContent = 'All cocktails'

            showCocktails(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${click}`)
        })

        letterElement.innerHTML = String.fromCharCode(i);

        contentElement.appendChild(letterElement);
    }
}