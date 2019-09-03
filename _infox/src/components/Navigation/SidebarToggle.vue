<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 35px;
  margin: 10px 5px;
  cursor: pointer;
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
  margin: 3px 0;
}
</style>