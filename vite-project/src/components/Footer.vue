<template>
  <h1 class="media">
    Company: Lex medaia group <br>
    instagram: @myflixer <br>
  </h1>
  <h1 class="contact">
    lex.li@student.tdsb.on.ca <br>
    647-510-1782 <br>
    </h1>
  <div class="block"></div>
</template>

<script setup>

</script>

<style scoped>
.media{
  left: 85px;
  bottom: -10px;
  line-height: 2;
  position: absolute;
  font-size: 18px;
  font-weight:bold;
  font-family:"lucida console", monospace;
  color: pink;
}

.contact{
  left: 400px;
  bottom: -10px;
  line-height: 2;
  position: absolute;
  font-size: 18px;
  font-weight:bold;
  font-family:"lucida console", monospace;
  color: pink;
}

.block{
  bottom: 0px;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 85px;
  background-color: black;
}
</style>