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
  height: 2px;
  background-color: white;
  margin: 3px 0;
}
</style>