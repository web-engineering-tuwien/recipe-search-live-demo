import { Recipe } from './recipe.js';

export async function retrieve(ingredients) {
    const url = api_url(ingredients);
    try {
        const response = await fetch(url);
        const rawData = await response.json();
        const responseRecipes = await rawData.results;
        console.log(responseRecipes);
        const recipes = responseRecipes.map(
            recipe => new Recipe(recipe.title.trim(),
                                Ingredients.parse(recipe.ingredients),
                                recipe.thumbnail,
                                recipe.href)
        );
        return recipes;
    } catch(error) {
        console.log(`An error happened when trying to retrieving data from URL ${url}`);
        console.log(error);
    }
}

function api_url(ingredients) {
    const API_URL = `http://www.recipepuppy.com/api/?i=${Ingredients.serialize(ingredients)}`;
    return cors_proxy_url(API_URL);
}

var Ingredients = {
    serialize : function(ingredients) {
        return ingredients.join(',');
    },
    parse : function(ingredientString) {
        return ingredientString.split(',');
    }
}

// Helper function that 'wraps' URLs to go through a proxy
// See: https://github.com/Rob--W/cors-anywhere
// Basic Info on CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// 
// Attention: Do this only for APIs you trust
// (or, as in this case, for demonstration purposes)
// There is a good reason why CORS restrictions exist:
// https://www.pivotpointsecurity.com/blog/cross-origin-resource-sharing-security/
function cors_proxy_url(url) {
    return 'https://cors-anywhere.herokuapp.com/' + url;
}