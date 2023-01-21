<template>
    <div id="backImg"></div>
    <Header></Header>
    <CartButton></CartButton>
    <HomeButton button-val="MyFlixer"></HomeButton>

    <MovieInfo v-if="showMovieInfo" :id="globalId"></MovieInfo>

    <input ref="hideMovieInfo" id="hideMovieInfo" type="button" value="X" @click="closeModal()" v-if="showButton">

    <div id="moviePic"><img v-for="option in displayOption" :src="option.posterPath" @click="movieInfoShow(option.id)"
            :id="option.id" class="movieOption"></div>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

import Header from "../components/Header.vue"
import CartButton from "../components/CartButton.vue";
import HomeButton from "../components/HomeButton.vue";
import MovieInfo from '../components/MovieInfo.vue';
import { indexStore } from "../store/index.js"
import { storeToRefs } from 'pinia';

const index = indexStore();
const { resultOptions } = storeToRefs(index);
let displayOption = resultOptions.value;
let showMovieInfo = ref(false);
let showButton = ref(false);
let globalId = ref();
let discoverySearch = axios.get('https://api.themoviedb.org/3/discover/movie?api_key=49468aca2342aec8c99327aff8518492&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', {
    include_adult: false,
})
let discoverySearchResult = discoverySearch.then((result) => {
    for (let i = 0; i < result.data.results.length; i++) {
        index.addResultOption(result.data.results[i].id, result.data.results[i].poster_path);
    }
})

function movieInfoShow(movieId) {
    showMovieInfo.value = true;
    showButton.value = true;
    globalId.value = movieId;
}

function closeModal(movieId) {
    showMovieInfo.value = false;
    showButton.value = false;
    globalId.value = movieId;
}
</script>

<style scoped>
#moviePic {
    position: absolute;
    margin-top: 15px;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: 400px 400px 400px 400px;
    width: 95%;
}

.movieOption {
    position: relative;
    display: block;
    top: 35%;
    width: 60%;
}

#hideMovieInfo {
    position: absolute;
    z-index: 101;
    right: 200px;
    top: 185px;
    background-color: pink;
    border-radius: 5px;
    width: 35px;
    height: 35px;
    font-weight: bold;
    font-size: 20px;
}
</style>
