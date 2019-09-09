<template>
  <div id="sponsors">
    <Heading anchor=".sponsors" :speed="-4">Sponsors</Heading>
    <div class="sponsors">
      <div class="absoulte layer-1" v-rellax="{speed: 1}">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
        </div>
      </div>
      <div class="absoulte layer-2" v-rellax="{speed: -1}">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
        </div>
      </div>
      <div class="absoulte layer-3" v-rellax="{speed: -3}">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
            <div class="sponsor-item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/UI/Heading";

export default {
  components: {
    Heading
  }
};
</script>

<style lang="scss" scoped>
#sponsors {
  // height: 200vh;
  margin-top: -45%;
}
.sponsors {
  margin-top: 45%;
}
.absoulte {
  position: absolute;
  width: 100%;
}
.sponsor-item {
  background: white;
  opacity: 0.3;
  border-radius: 50%;
  box-shadow: 0px 0px 20px blue;
  // margin: 50px 100px;
  margin: 50px 0;
}
.layer-1 {
  margin-top: 0;
}
.layer-2 {
  margin-top: -10em;
}
.layer-3 {
  margin-top: -30em;
}

.layer-1 .sponsor-item {
  width: 10em;
  height: 10em;
  background: rgb(41, 41, 233);
  opacity: 0.9;
}
.layer-2 .sponsor-item {
  width: 8em;
  height: 8em;
  background: rgb(41, 41, 233);
  opacity: 0.5;
}
.layer-3 .sponsor-item {
  width: 5em;
  height: 5em;
}

.layer-1 .row:nth-child(even) {
  transform: translateX(50px);
}
.layer-2 .row:nth-child(odd) {
  transform: translateX(150px);
}
.layer-2 .row:nth-child(even) {
  transform: translateX(-150px);
}
.layer-3 .row:nth-child(odd) {
  transform: translateX(-120px);
}
.layer-3 .row:nth-child(even) {
  transform: translateX(120px);
}
</style>