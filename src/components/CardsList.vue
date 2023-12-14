<script>
import CardComponent from './CardComponent.vue';
import CardsFound from './CardsFound.vue';
import { store } from '../store.js';
export default {
    name: 'CardsList',
    components: {
        CardComponent,
        CardsFound,
    },
    props: ['cards'],
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <!-- TODO----Sistemare griglia -->
    <div class="container gx-0">
        <div class="row gx-0 p-4 d-flex">
            <div class="count-cards text-white fw-bold">
                <CardsFound :found="store.cards.length" />
            </div>
            <div class="cards-list d-flex flex-wrap">
                <CardComponent v-for="card in cards" :image="card.card_images" :name="card.name"
                    :archetype="card.archetype" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: white;
    .count-cards {
        background-color: #212529;
    }
    .cards-list {
        gap: 20px;
    }
}
</style>