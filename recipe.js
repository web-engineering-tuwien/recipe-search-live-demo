export class Recipe {
    constructor(title, ingredients, thumbnail, url) {
        this.title = title;
        this.ingredients = ingredients;
        this.thumbnail = thumbnail;
        this.url = url;
    }
}

export var Ingredients = {
    serialize : function(ingredients) {
        return ingredients.join(',');
    },
    parse : function(ingredientString) {
        return ingredientString.split(',');
    }
}