<template>
  <div>
    <Hero />
    <About />
    <Sponsors />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Sponsors from "@/components/Sponsors.vue";
export default {
  name: "home",
  components: {
    Hero,
    About,
    Sponsors
  }
};
</script>

<style scoped>
</style>
