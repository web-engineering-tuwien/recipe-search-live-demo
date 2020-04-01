import { Recipe } from './recipe.js';
import * as DOM from './dom-helpers.js';

export class RecipeDocumentContainer {
    constructor(containerID='results') {
        this.container = document.getElementById(containerID);
        if(!this.container) {
            throw `Error when trying to create RecipeDocumentContainer: ` +
                    `ID '${containerID}' does not exist`;
        }
    }

    clear() {
        this.container.innerHTML = '';
    }

    addRecipeToDocument(recipe) {
        this.container.appendChild(createRecipeElements(recipe));

        function createRecipeElements(recipe) {
            return DOM.container([
                DOM.textElement('h2', recipe.title),
                DOM.container(
                    [createThumbnailUrlContainer(recipe.thumbnail, recipe.url),
                    createIngredientContainer(recipe.ingredients)]
                )], 'article');
        }

        function createThumbnailUrlContainer(thumbnail, url) {
            return DOM.container([
                DOM.setAttributes(document.createElement('img'), {src: thumbnail}),
                // had to replace &rarrow; with its hex name, see here:
                // https://stackoverflow.com/questions/39291156/javascriptoutput-symbols-and-special-characters
                document.createTextNode('\u2192'),
                DOM.setAttributes(DOM.textElement('a', 'Full Recipe'), {href: url})
            ]);
        }

        function createIngredientContainer(ingredients) {
            return DOM.container([DOM.textElement('h3', 'Ingredients'),
                                  DOM.list(recipe.ingredients)]);
        }
    }
}