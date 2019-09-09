<template>
  <div
    class="title text-center"
    v-rellax="titleRellax"
    data-aos="title"
    :data-aos-anchor="anchor"
  >
    <h1 class="display-2 font-weight-bold text-white"> <slot /> </h1>
  </div>
</template>

<script>
export default {
  props: {
    anchor: String
  },
  data() {
    return {
      titleRellax: {
        speed: -3
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 0;
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
</style>