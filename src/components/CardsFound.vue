<script>
export default {
    name: 'CardsFound',
    props: ['found']
  
}
</script>

<template>
    <div class="cards-found">
        <p class="m-3">Found {{ found }} cards</p>
    </div>

</template>

<style scoped>
.container {
    background-color: red;
}
</style>