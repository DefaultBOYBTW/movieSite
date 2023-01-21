<template>
    <img id="shopIMG" src="../assets/imgbin_reel-to-reel-audio-tape-recording-film-computer-icons-cinema-png.png" @click="shopPg()">
</template>

<script setup>
    import router from "../router";

    function shopPg(){
        router.push('/shopping')
    }
</script>

<style>
    #shopIMG{
        position: absolute;
    left: 38%;
    top: 20%;
    width:25%;
    }
</style>