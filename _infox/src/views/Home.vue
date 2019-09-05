<template>
  <div class="home">
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
export default {
  name: "home",
  components: {
    Home,
    About
  }
};
</script>

<style scoped>
.hero {
  height: 200vh;
  border: 1px solid black;
  margin-bottom: 20px;
}
</style>
