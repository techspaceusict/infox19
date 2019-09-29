<template>
  <button
    class="btn accent"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"> <slot /> </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped>

.btn {
  color: white;
  padding: 10px 50px;
  transition: background-color 200ms ease-out;
  border-radius: 50px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.20);
}

.accent {
  background-color: #0575e6;
}
.accent:hover,
.accent:active {
  background-color: #035bb3;
}

.outline-accent {
  border: 1.5px solid #0575e6;
  color: #0575e6;
  background-color: transparent;
}
.outline-accent:hover,
.outline-accent:active {
  color: white;
  background-color: #0575e6;
}

.accent2 {
  background-color: #191919;
}
.accent2:hover,
.accent2:active {
  background-color: #111111;
}

.register {
  border-radius: 5px;
  padding: 15px 50px;
  background: transparent;
  border: 1px solid blue;
  box-shadow: 0 0 20px rgba(0, 0, 255, 0.5);
}
.register a  {
  text-decoration: none;
  color: white;
}
.register:hover {
  border-radius: 5px;
  padding: 15px 50px;
  background: blue;
  border: 1px solid blue;
}

</style>
