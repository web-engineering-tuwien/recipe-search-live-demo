import { Recipe, Ingredients } from './recipe.js';

export function retrieve(ingredients) {
    const key = getStorageKey(ingredients);
    if(key in localStorage) {
        console.log(`Retrieving ${key} from local storage`);
        return JSON.parse(localStorage[key]);
    }
}

export function store(ingredients, recipes) {
    const key = getStorageKey(ingredients);
    console.log(`Storing ${key} in local storage`);
    localStorage[key] = JSON.stringify(recipes);
}

function getStorageKey(ingredients) {
    return Ingredients.serialize(ingredients);
}