<script>
import axios from 'axios';
import SelectComponent from './SelectComponent.vue';
import CardsList from './CardsList.vue';

import { store } from '../store.js';
export default {
    name: 'AppMain',
    components: {
        SelectComponent, 
        CardsList,
    
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        archetypeChoice(){
            if(this.store.searchArchetype !== ''){
                axios.get(this.store.apiUrl, { 
                    params: {
                        archetype: this.store.searchArchetype,
                    }
                }).then((response) => {
                    this.store.cards = response.data.data;
                });
            }else {
                axios.get(this.store.apiUrl).then((response) => {
                    this.store.cards = response.data.data;
                });
            }
        }
    },
    created(){
        this.archetypeChoice();
    },
   
}
</script>

<template>
    <main>
        <SelectComponent @choice="archetypeChoice"/>
        <CardsList :cards="store.cards"/>
    </main>
  
</template>

<style scoped>
</style>