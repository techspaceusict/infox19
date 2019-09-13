<template>
  <div>
    <Background />
    <Hero />
    <Gap :height="'20vh'" />
    <About />
    <Gap :height="'20vh'" />
    <Sponsors />
    <Gap :height="'20vh'" />
    <Glimpses />
    <!-- <Contact /> -->
    <Gap :height="'20vh'" />
    <Contact />
    <Footer class="the-footer" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Sponsors from "@/components/Sponsors.vue";
import Glimpses from "@/components/Glimpses.vue";
import Footer from "@/components/Navigation/Footer.vue";
import Background from "@/components/Background.vue";
import Contact from "@/components/Contact.vue";

import Gap from "@/components/Gap.vue";

export default {
  name: "home",
  components: {
    Hero,
    About,
    Sponsors,
    Glimpses,
    Footer,
    Background,
    Contact,
    Gap
  }
};
</script>

<style scoped>
.the-footer {
  /* margin-top: 120em; */
}
</style>
