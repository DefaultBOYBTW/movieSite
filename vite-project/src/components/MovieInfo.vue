<template>
    <div id="movieInfos">
        <img :src="moviePath" id="moviePoster">
        <h1 id="movieTitle">{{ title }}</h1>
        <h1 id="overview">{{ overview }}</h1>
        <h1 id="releaseDate">{{ releaseDate }}</h1>
        <input ref="purchaseButton" id="purchaseButton" type="button" value="Add to Cart" @click="index.addItem(props.id)">
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { indexStore } from "../store/index.js"
import { storeToRefs } from 'pinia';
const index = indexStore();
const { movieItems } = storeToRefs(index);
const props = defineProps({
    id: String,
    buttonValue: String
});
const moviePath = ref("");
const title = ref("");
const releaseDate = ref("");
const overview = ref("");
const purchaseButton = ref();

let search = axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
        api_key: "49468aca2342aec8c99327aff8518492",
        include_adult: false,
    }
})

let searchResult = search.then((movieData) => {
    moviePath.value = `https://image.tmdb.org/t/p/w500/${movieData.data.poster_path}`;
    title.value = movieData.data.title;
    releaseDate.value = movieData.data.release_date;
    overview.value = movieData.data.overview;
})
</script>

<style>
#movieInfos{
    position: absolute;
    z-index: 100;
    left: 22%;
    top: 23%;
    width: 1000px;
    height: 500px;
    font-family: "lucida console", monospace;
    color: pink;
    background-color: black;
    border-radius: 15px;
}
#movieTitle{
    position: relative;
    left:15px;
    width:500px;
    font-style: bolder;
    font-size: 30px;
    font-weight: bold;
}
#overview{
    position: relative;
    top:10px;
    left:15px;
    font-size: 18px;
    width: 520px;
}
#movieInfoBox{
    z-index: 99;
}
#releaseDate{
    top:40px;
    position: relative;
    left:15px;
}
#purchaseButton{
    width:150px;
    height: 50px;
    top:70px;
    border-radius: 10px;
    position: relative;
    left:15px;
    background-color: pink;
    font-family: "lucida console", monospace;
    font-size: 20px;
}
#moviePoster{
    position: absolute;
    left: 700px;
    top: 60px;
}

</style>