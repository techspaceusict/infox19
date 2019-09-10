<template>
  <div
    class="title text-center"
    v-rellax="titleRellax"
    data-aos="title"
    :data-aos-anchor="anchor"
  >
    <h1 class="display-2 font-weight-bold text-white"><slot /></h1>
  </div>
</template>

<script>
export default {
  props: {
    anchor: {
      type: String
    },
    speed: {
      type: Number,
      default: -3
    }
  },
  data() {
    return {};
  },
  computed: {
    titleRellax() {
      return {
        speed: this.speed
      };
    }
  }
};
</script>

<style scoped>
.title {

}
h1 {
  font-size: 15em;
}
[data-aos="title"] {
  opacity: 1;
  transition-property: opacity;
}
[data-aos="title"].aos-animate {
  opacity: 0.1;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 4em;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  h1 {
    font-size: 6em;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  h1 {
    font-size: 8em;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  h1 {
    font-size: 10em;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>