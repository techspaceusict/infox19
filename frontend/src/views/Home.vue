<template>
  <div>
    <Hero />
    <About />
    <Sponsors />
    <Glimpses />
    <Footer class="the-footer" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Sponsors from "@/components/Sponsors.vue";
import Glimpses from "@/components/Glimpses.vue";
import Footer from "@/components/Navigation/Footer.vue";

export default {
  name: "home",
  components: {
    Hero,
    About,
    Sponsors,
    Glimpses,
    Footer
  }
};
</script>

<style scoped>
.the-footer {
  /* margin-top: 120em; */
}
</style>
