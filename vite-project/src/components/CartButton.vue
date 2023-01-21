<template>
    <img id="cartIMG" src="../assets/kisspng-shopping-cart-shopping-cart-5ab5c02eefbdc9.747842151521860654982.png" @click="cartPg()">
</template>

<script setup>
    import router from "../router";

    function cartPg(){
        router.push('/cart')
    }
</script>

<style>
    #cartIMG{
        position: absolute;
        width:4%;
        left:82.5%;
        top:1.25%;
        z-index: 100000000;
    }
</style>