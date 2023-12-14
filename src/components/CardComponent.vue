<script>

export default {
    name: 'Card',
    props: ['name', 'archetype', 'image']
}
</script>

<template>
    <div class="card text-center">
        <img :src="image[0].image_url" :alt="name">
        <h4 class="text-uppercase text-white fs-6 pt-3">{{ name }}</h4>
        <div>
            <p>{{ archetype }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: calc((100% / 5 ) - 20px);
    background-color: #d48f38;
}
</style>