<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.drawer-toggle *{z-index: 2;}
.drawer-toggle {
  display: flex;
  flex-direction: column;
  
  width: 45px;
  
  margin: 15px 10px;
  cursor: pointer;
}

.drawer-toggle .bar {
  width: 90%;
  height: 4px;
  background-color: white;
  box-shadow: 0 0 10px 2px #7678ffa9;
  margin: 4px 0;
}
</style>