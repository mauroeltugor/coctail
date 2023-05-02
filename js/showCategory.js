import { cocktail } from './apiConsuptio.js';

const showMenu = (newLink) => {
    newLink.map((newLink =>{

        const cocktailsName = document.querySelector(".nameFromCategory");
        cocktailsName.innerHTML = newLink.strCategory

        const cocktailTemplate = document.querySelector('.nameFromCategory')
        const cocktailsClone = cocktailTemplate.cloneNode(true)

        document.querySelector('#addCategory').appendChild(cocktailsClone);
    }))
    const cardDelete = document.querySelector('#delete');
    cardDelete.remove();
}

export const showCategory = async (url) =>{
    showMenu(await cocktail(url));
}