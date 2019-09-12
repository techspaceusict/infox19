<template>
  <div class="gap"></div>
</template>
<script>
export default {
  props: ["height"],
  mounted() {
    // console.log(this.$el);
    this.$el.style.height = this.height;
  }
};
</script>
<style>
</style>