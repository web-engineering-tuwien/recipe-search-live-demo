<template>
    <article>
        <h2>{{recipe.title}}</h2>
        <div>
            <div>
                <img v-if="recipe.thumbnail" :src="recipe.thumbnail">
                <img v-else :src="standardImage">
                <template v-if="recipe.url">
                    &rarr; <a :href="recipe.url">Full Recipe</a>
                </template>
            </div>
            <div>
                <h3>Ingredients</h3>
                <ul class="ingredients">
                    <li @click="addIngredient(ingredient)" v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "RecipeItem",
        props: {
            recipe: {
                title: String,
                thumbnail: String,
                url: String,
                ingredients: Array
            }
        },
        data : function() {
            return {
                // This is only here to demonstrate props and data
                // Usually (since the Image URL is static) you would 
                // just add it directly into the template
                standardImage : 'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif'
            }   
        },
        methods : {
            addIngredient : function(ingredient) {
                this.$emit("ingredientAdd", ingredient);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit 
     CSS to this component only -->
<style scoped>
    li {
        text-decoration: underline;
        cursor: pointer;
    }
</style>