<template>
  <div class="hero">
    <!-- <Navbar /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navigation/Navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style scoped>
  .hero {
    height: 100vh;
    border: 1px solid black;
    margin-bottom: 20px;
  }
</style>
