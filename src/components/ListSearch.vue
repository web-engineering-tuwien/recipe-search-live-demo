<template>
    <label>
        {{ label }}
        <input v-model="searchText" :title="title" type="text" />
    </label>
</template>

<script>
    export default {
        name: "RecipeItem",
        props: {
            label: String,
            title: String,
            value: {
                default: () => [],
                type: Array
            }
        },
        computed : {
            searchText : {
                get: function() {
                    return this.value.join(',')
                },
                set: function(newInput) {
                    this.$emit('input', newInput.split(','))
                }
            }
        }
    }
</script>
<style scoped>
</style>