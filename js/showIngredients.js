import { cocktailsApi } from './apiConsuptio.js'
import { showCocktails } from './showCocktails.js'

const ingredientsCreate = (ingredients) => {

    const ingredientsMenu = document.querySelector('#menu')

    const listMenu = document.createElement('ul');
    ingredientsMenu.appendChild(listMenu);

    ingredients.map((ingredient) => {

        const ingredientsName = document.createElement('li')

        ingredientsName.addEventListener('click', () => {
            const click = ingredientsName.innerHTML;

            const tittle = document.querySelector('#mainTitle');
            tittle.textContent = `Cocktails with ${click}`

            showCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${click}`)
        })

        ingredientsName.textContent = ingredient.strIngredient1;
        listMenu.appendChild(ingredientsName)
    })
}

export const showIngredient = async (url) => {
    ingredientsCreate(await cocktailsApi(url))
}