<template>
    <div id="recipeSearch">
        <section id="search">
            <form role="search" v-on:submit.prevent="recipeSearch()">
                <list-search-input 
                    label="Ingredients"
                    title="Type in comma-separated ingredients"
                    v-model="ingredients"/>
                <button type="submit">Search</button>
            </form>
        </section>
        <section id="results">                     
            <div v-if="message">{{ message }}</div>
            <!--<recipe-item :recipe="{title:'Some recipe', ingredients:['eggs', 'potatos']}" />
            <recipe-item :recipe="{title:'Some other recipe'}" />-->
            
            <!-- using index as key here because recipes do not have IDs (use IDs if you have them) -->
            <recipe-item @ingredientAdd="addIngredientToSearch" v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
        </section>
    </div>
</template>

<script>
    import RecipeItem from "@/components/RecipeItem";
    import ListSearch from "@/components/ListSearch";
    import * as RecipeAPI from "@/service/recipe-api.js";

    export default {
        name : "RecipeSearch",
        components : {
            'recipe-item' : RecipeItem,
            'list-search-input' : ListSearch
        },        
        data : function() {
            return {
                recipes: [],
                ingredients : [],
                message : "Search for recipes by ingredients"
            }
        },        
        methods : {
            recipeSearch : async function() {
                this.message = `Searching for ${this.ingredients}`;
                this.recipes = await RecipeAPI.retrieve(this.ingredients);
                this.message = `Found ${this.recipes.length} recipes`;
            },
            addIngredientToSearch : function(ingredient) {
                if(!this.ingredients.includes(ingredient)) {
                    this.ingredients = this.ingredients.concat([ingredient]);
                    alert(`${ingredient} added to search list`);
                } else {
                    alert(`${ingredient} is already in search list`);
                }
            }
        }
    }
</script>

<style scoped>

</style>