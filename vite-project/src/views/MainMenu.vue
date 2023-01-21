<template>
    <div id="backImg"></div>
    <h1 id="slogan">Kick Back and Relax</h1>
    <h1 id="title">MyFlixer</h1>
    <Header></Header>
    <Footer></Footer>
    <ImgButton></ImgButton>
    
</template>

<script setup>
    import Header from "../components/Header.vue"
    import Footer from "../components/Footer.vue"
    import ImgButton from "../components/ImgButton.vue";

</script>

<style>
html, body{
    margin: 0;
    padding: 0;

}
p{
    color: pink;
}
img{
    position: absolute;
    left: 38%;
    top: 20%;
    width:25%;
}
#slogan{
    position:absolute;
    left: 40%;
    top: 55%;
    font-size: 30px;
    color: pink;
    font-family:"Lucida console", monospace;
    font-weight: bold;
}
#backImg{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -2;
    height: 100%;
    width: 100%;
    background-image: url('../assets/cinema-movie-film-festival-background_1017-23458.webp');
    background-size: cover;
    filter: brightness(25%);
    background-color: darkgrey;
}
#title{
    left: 85px;
    top: 5px;
    position: absolute;
    font-size: 35px;
    font-weight: bold;
    font-family: "lucida console", monospace;
    color: pink;
    background-color: black;
    border-radius: 15px;
}
</style>