<template>
  <div id="app">
    <Navbar class="the-navbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar,
  }
};
</script>

<style>
/* @import url('@/assets/ModernEdge.tff'); */

html {
  font-family: "Modern Edge" !important;
}
body {
  /* background: #000046 !important; */
  background: #000 !important;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.the-navbar {
  z-index: 10;
}
</style>
