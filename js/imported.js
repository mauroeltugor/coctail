import { showCocktails } from './showCocktails.js';
import { alphabetCreate } from './createAlphabet.js';
import { showCategory } from './showCategories.js'
import { showIngredient } from './showIngredients.js'

showCategory('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
showCocktails('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
showIngredient('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
alphabetCreate();
