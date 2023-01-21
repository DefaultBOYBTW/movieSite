<template>
    <Header></Header>
    <ShopButton button-val="MyFlixer"></ShopButton>
    <div id="backImg"></div>
    <div v-for="option in movieInfo">
        <div id=cartPicId><img :src="option.imgSrc" class="cartPic"></div>
        <!-- <p>{{ option.title }}</p> -->
    </div>

</template>

<script setup>
import { ref } from 'vue';
import Header from "../components/Header.vue"
import Footer from '../components/Footer.vue';
import axios from 'axios';
import { indexStore } from "../store/index.js"
import { storeToRefs } from 'pinia';
import router from "../router";
import ShopButton from '../components/ShopButton.vue';
const index = indexStore();
const { shoppingCart } = storeToRefs(index);

let cartItems = ref(shoppingCart.value);

let movieInfo = ref([]);

for (let i = 0; i < cartItems.value.length; i++) {
    let discoverySearch = axios.get(`https://api.themoviedb.org/3/movie/${cartItems.value[i]}?api_key=49468aca2342aec8c99327aff8518492&language=en-US`, {
        include_adult: false,
    })
    let discoverySearchResult = discoverySearch.then((result) => {
        movieInfo.value.push({ title: result.data.title, imgSrc: "https://image.tmdb.org/t/p/w500/" + result.data.poster_path })
    })
}

</script>

<style>
.cartPic {
    top: 60px;
    left:0%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 100px;  
}

</style>