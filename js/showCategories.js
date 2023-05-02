import { cocktailsApi } from './apiConsuptio.js'
import { showCocktails } from './showCocktails.js'

const showMenu = (cocktailCategory) => {

    const categorys = document.querySelector('#category');

    const content = document.createElement('ul');
    content.setAttribute('id', 'addCategory');
    categorys.appendChild(content);

    cocktailCategory.map((cocktailCategory => {

        const namesOfCategories = document.createElement('li');
        namesOfCategories.classList.add('categoryName');

        namesOfCategories.addEventListener('click', async () => {
            const categoryClick = namesOfCategories.innerHTML;

            const tittle = document.querySelector('#mainTitle');
            tittle.textContent = cocktailCategory.strCategory;

            showCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryClick}`);
        })

        namesOfCategories.textContent = cocktailCategory.strCategory;
        content.appendChild(namesOfCategories);
    }))
}

export const showCategory = async (url) => {
    showMenu(await cocktailsApi(url));
}