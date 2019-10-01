<template>
  <div>
    <Background />
    <Hero />
    <About />
    <Sponsors />
    <Glimpses />
    <Contact />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Sponsors from "@/components/Sponsors.vue";
import Glimpses from "@/components/Glimpses.vue";
import Background from "@/components/Background.vue";
import Contact from "@/components/Contact.vue";



export default {
  name: "home",
  components: {
    Hero,
    About,
    Sponsors,
    Glimpses,
    Background,
    Contact,
  }
};
</script>

<style scoped>

</style>
