<template>
  <div id="app">
    <div class="background-art" v-rellax="{ speed: -10 }">
      <div class="row mx-auto justify-content-center">
        <div class="art-item" v-rellax="{ speed: -2 }">
          <p v-for="(n,i) in total" :key="i"> {{ Math.floor(Math.random() * 2) }} </p>
        </div>
        <div class="art-item" v-rellax="{ speed: -5 }">
          <p v-for="(n,i) in total" :key="i"> {{ Math.floor(Math.random() * 2) }} </p>
        </div>
        <div class="art-item" v-rellax="{ speed: -4 }">
          <p v-for="(n,i) in total" :key="i"> {{ Math.floor(Math.random() * 2) }} </p>
        </div>
        <div class="art-item" v-rellax="{ speed: -3 }">
          <p v-for="(n,i) in total" :key="i"> {{ Math.floor(Math.random() * 2) }} </p>
        </div>
        <div class="art-item" v-rellax="{ speed: -1 }">
          <p v-for="(n,i) in total" :key="i"> {{ Math.floor(Math.random() * 2) }} </p>
        </div>
        <div class="art-item" v-rellax="{ speed: -3 }">
          <p v-for="(n,i) in total" :key="i"> {{ Math.floor(Math.random() * 2) }} </p>
        </div>
      </div>
    </div>
    <Navbar class="the-navbar" />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navigation/Navbar.vue'

  export default {
    name: 'home',
    components: {
      Navbar
    },
    data() {
      return {
        total: 20
      }
    }

  }
</script>

<style>
  /* @import url('@/assets/ModernEdge.tff'); */

  html {
    font-family: 'Modern Edge' !important;
  }
  body {
    background: #000 !important;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .the-navbar {
    z-index: 10;
  }

  .background-art {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    color: white;
  }
  .art-item {
    margin: 0 100px;
  }
  .art-item p {
    margin: 100px 0;
    opacity: 0.2;
  }
  /* .art-item:nth-child(even) {
    transform: translateY(-50px)
  } */
</style>
