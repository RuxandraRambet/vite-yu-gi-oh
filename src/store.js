import { reactive } from "vue";

export const store = reactive({
    cards: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypeApiUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList: [],
    searchArchetype: '',
})