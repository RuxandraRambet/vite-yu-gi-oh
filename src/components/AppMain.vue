<script>
import SelectComponent from './SelectComponent.vue';
import CardsList from './CardsList.vue';
import CardsFound from './CardsFound.vue';
export default {
    name: 'AppMain',
    components: {
        SelectComponent, 
        CardsList,
        CardsFound,
    }
}
</script>

<template>
    <main>
        <SelectComponent />
        <CardsList/>
        <CardsFound/>
    </main>
  
</template>

<style scoped>
</style>