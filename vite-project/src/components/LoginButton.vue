<template>
    <input id="logButton" type="button" :value="buttonVal" @click="loginPg()">
</template>

<script setup>
    import router from "../router";

    defineProps({buttonVal: String});

    function loginPg(){
        router.push('/login')
    }

</script>

<style>
#logButton{
    position: absolute;
    z-index: 1;
    width: 110px;
    height: 45px;
    right: 50px;
    top:20px;
    background-color: pink;
    border-radius: 9px;
    font-size: 20px;
    font-family:"Lucida console", monospace;
    font-weight: bold;
}
</style>