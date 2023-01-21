<template>
    <input id="homeButton" type="button" :value="buttonVal" @click="homePg()">
</template>

<script setup>
    import router from "../router";

    defineProps({buttonVal: String});

    function homePg(){
        router.push('/')
    }

</script>

<style>
#homeButton{
  left: 77px;
  top: 25px;
  position: absolute;
  font-size: 35px;
  font-weight: bold;
  font-family: "lucida console", monospace;
  color: pink;
  background-color: black;
  border-radius: 15px;
  z-index: 100000;
}
</style>