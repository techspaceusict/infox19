<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navigation/Navbar.vue'

  export default {
    name: 'home',
    components: {
      Navbar
    }
  }
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
