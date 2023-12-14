<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'Select',
    data(){
        return {
            store,
        };   
    },
    created(){
        axios.get(this.store.archetypeApiUrl).then((response) => {
            this.store.archetypeList = response.data;
        });
    },
}
</script>

<template>
    <div class="container p-3">
        <form class="row gx-3 gy-2 align-items-center">
            <div class="col-sm-3">
                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                <select @change="$emit('choice')" class="form-select" id="specificSizeSelect" v-model="store.searchArchetype">
                    <option selected="" value="">Choose Archetype</option>
                    <option selected="" v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
                </select>
            </div>
        </form>

    </div>
</template>

<style scoped>
</style>