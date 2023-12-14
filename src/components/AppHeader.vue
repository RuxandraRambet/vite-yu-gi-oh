<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="img-container">
            <img src="/img/logo.png" alt="logo">
        </div>
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style scoped>
header {
    padding: 20px;
    background-color: #f1f1f1;

    .img-container {
        width: 60px;

        img {
            width: 100%;
            display: block;
        }
    }
    
    h1 {
        margin-left: 20px;
        font-weight: 300;
    }
}
</style>