<template>

  <div class="box"></div>
  <LoginButton button-val="Login"></LoginButton>
  

</template>

<script setup>

import LoginButton from "./LoginButton.vue";

</script>

<style scoped>
.box {
  top: -100px;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 200px;
  background-color: black;
  border-radius: 50px;
}

</style>
