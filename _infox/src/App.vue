<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navigation/Navbar.vue'
  import Rellax from 'rellax';

  export default {
    name: 'home',
    components: {
      Navbar
    },
    mounted() {
      let rellax = new Rellax(".rellax");
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
