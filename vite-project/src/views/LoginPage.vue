<template>
    <div id="backImg"></div>
    <div id="box"></div>
    <h1 id="message">Sign in to MyFlixer</h1>
    <img src="../assets/imgbin_reel-to-reel-audio-tape-recording-film-computer-icons-cinema-png.png">
    <HomeButton button-val="Return Home"></HomeButton>
    <form @submit.prevent="checkLogin()" id="logContain">
        <label class="loginTag">Username:</label> <br>
        <input type="text" ref="username" placeholder="Username" class="input"> <br>
        <label class="loginTag">Password:</label> <br>
        <input type="password" ref="password" placeholder="Password" class="input"> <br>
        <input type="submit" value="Enter" @click="checLogin" id="enterButton">
    </form>
</template>

<script setup>
    import router from "../router";
    import { ref } from "vue";
import HomeButton from "../components/HomeButton.vue";

    const username = ref("username");
    const password = ref("password");

    function checkLogin() {
    if (username.value.value != "tmdb" || password.value.value != "movies") {
        
    }
    else {
        router.push('/shopping')
    }
}
    
</script>

<style scoped>
#box{
    position: absolute;
    top: 50%;
    left: 42%;
    width: 300px;
    height: 10pc;
    background-color: pink;
    border-radius: 10px;
}

#logContain{
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

#message{
    position:absolute;
    top: 43%;
    left: 42%;
    font-size: 28px;
    font-weight: bold;
    font-family: "lucida console", monospace;
    color: pink;
}

img{
    top: 16%;
    left: 41%;
    width: 20%;
}

</style>