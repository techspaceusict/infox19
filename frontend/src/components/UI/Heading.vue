<template>
  <div
    class="title text-center"
    :class="{ 'on-page': onPage }"
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
    wrapper: {
      type: String
    },
    speed: {
      type: Number,
      default: -3
    },
    onPage: {
      type: Boolean,
      default: false
    },
    subHeading: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    titleRellax() {
      return {
        speed: this.speed,
        wrapper: this.wrapper,
        relativeToWrapper: true
      };
    }
  }
};
</script>

<style scoped>
.title {
  padding-top: 40em;
  /* padding-bottom: 2.5em; */
  text-shadow: 0px 0px 20px rgba(253, 253, 253, 0.6);
  /* filter: drop-shadow(0px 0px 10px rgba(253, 253, 253, 0.6)); */
}
.on-page {
  padding-top: 0;
}
h1 {
  /* padding-bottom: 2em; */
  margin-bottom: 0.5em;
  font-size: 15em;
}
[data-aos="title"] {
  opacity: 1;
  transition-property: opacity;
}
[data-aos="title"].aos-animate {
  opacity: 0.1;
}

@media only screen and (max-width: 500px) {
  h1 {
    font-size: 3em;
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 5em;
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