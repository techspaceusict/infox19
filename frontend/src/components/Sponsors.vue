<template>
  <div ref="sponsors" id="sponsors">
    <Heading :subHeading="'Previous'" anchor=".sponsors" wrapper="#sponsors" :speed="-6">Sponsors</Heading>
    <div class="sponsors">
      <div
        v-for="(sponsorLayer, i) in sponsors"
        :key="i"
        class="absoulte"
        :class="i"
        v-rellax="i == 'layer-1' ? layer1 : i == 'layer-2' ? layer2 : layer3"
      >
        <div class="container-fluid">
          <div class="row justify-content-around" v-for="(sponsorRow, j) in sponsorLayer" :key="j">
            <div
              class="sponsor-item"
              v-for="(sponsor, k) in sponsorRow"
              :key="k"
              :style="{ 'background-image': 'url(' + getImgUrl(sponsor) + ')' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p class="text-white" v-for="(sponsor,i) in sponsors" :key="i">{{ sponsor }}</p> -->
  </div>
</template>

<script>
import sponsors from "@/assets/sponsors/sponsors.json";

export default {
  data() {
    return {
      sponsors: sponsors,
      layer1: {
        speed: 1,
        wrapper: "#sponsors",
        relativeToWrapper: true
      },
      layer2: {
        speed: -1,
        wrapper: "#sponsors",
        relativeToWrapper: true
      },
      layer3: {
        speed: -3,
        wrapper: "#sponsors",
        relativeToWrapper: true
      }
    };
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler(e) {
      console.log("event");
      let width = document.body.clientWidth;
      if (width <= 768) {
        this.layer1 = false;
        this.layer2 = false;
        this.layer3 = false;
        this.layer1 = {
          speed: 0,
          wrapper: "#sponsors",
          relativeToWrapper: true
        };
        this.layer2 = {
          speed: 0,
          wrapper: "#sponsors",
          relativeToWrapper: true
        };
        this.layer3 = {
          speed: 0,
          wrapper: "#sponsors",
          relativeToWrapper: true
        };
      }
    },
    getImgUrl(img) {
      return require("../assets/sponsors/" + img);
    }
  }
};
</script>

<style lang="scss" scoped>
#sponsors {
  z-index: 3;
}
#sponsors {
  margin-top: -30em;
}
.absoulte {
  position: absolute;
  width: 100%;
}
.container-fluid {
  overflow: hidden;
}
.sponsor-item {
  // margin: 50px 100px;
  margin: 30px 8vw;
  // box-shadow: 0px 0px 20px blue;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 255, 0.8));
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.barista {
  background-image: url("../assets/sponsors/barista.jpg");
}
.agro {
  background-image: url("../assets/sponsors/agro.jpg");
}
.blogx {
  background-image: url("../assets/sponsors/blogx.jpg");
}
.codeStreet {
  background-image: url("../assets/sponsors/codeStreet.png");
}
.codingBlock {
  background-image: url("../assets/sponsors/codingNinja.svg");
}
.codingNinja {
  background-image: url("../assets/sponsors/codingNinja.svg");
}
.designcut {
  background-image: url("../assets/sponsors/designcut.png");
}
.domainX {
  background-image: url("../assets/sponsors/domainX.png");
}
.earning_labs {
  background-image: url("../assets/sponsors/earning_labs.png");
}
.ED {
  background-image: url("../assets/sponsors/ED.png");
}
.enactus_igdtu {
  background-image: url("../assets/sponsors/enactus_igdtu.png");
}
.gamex {
  background-image: url("../assets/sponsors/gamex.jpg");
}
.gaming {
  background-image: url("../assets/sponsors/gaming.jpg");
}
.Hidden_Hour {
  background-image: url("../assets/sponsors/Hidden_Hour.png");
}
.HouseOfAmigos {
  background-image: url("../assets/sponsors/HouseOfAmigos.png");
}
.incubateind {
  background-image: url("../assets/sponsors/incubateind.png");
}
.josh-logo-square {
  background-image: url("../assets/sponsors/josh-logo-square.png");
}
.microHost {
  background-image: url("../assets/sponsors/microHost.png" );
}
.Paytm {
  background-image: url("../assets/sponsors/Paytm.png");
}
.Podio {
  background-image: url("../assets/sponsors/Podio.png");
}
.reappoint {
  background-image: url("../assets/sponsors/reappoint.jpg");
}
.redbull {
  background-image: url("../assets/sponsors/redbull.png");
}
.redwolf {
  background-image: url("../assets/sponsors/redwolf.png");
}
.reliance {
  background-image: url("../assets/sponsors/reliance.png");
}
.streetHack {
  background-image: url("../assets/sponsors/streetHack.jpg");
}
.wall {
  background-image: url("../assets/sponsors/wall.png");
}

.layer-1 {
  // margin-top: 10em;
  z-index: 3;
}
.layer-2 {
  // margin-top: 0em;
  z-index: 2;
}
.layer-3 {
  // margin-top: -20em;
  z-index: 1;
}

.layer-1 .sponsor-item {
  width: 12em;
  height: 12em;
  opacity: 1;
}
.layer-2 .sponsor-item {
  width: 8em;
  height: 8em;
  opacity: 0.9;
}
.layer-3 .sponsor-item {
  width: 5em;
  height: 5em;
  opacity: 0.8;
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

@media only screen and (max-width: 576px) {
  #sponsors {
    margin-top: -40em;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  .sponsor-item {
    width: 6em !important;
    height: 6em !important;
    opacity: 1 !important;
    margin: 20px 4vw;
  }
  .absoulte {
    position: relative;
  }
  .layer-1 .row:nth-child(even) {
    transform: translateX(0);
  }
  .layer-2 .row:nth-child(odd) {
    transform: translateX(0);
  }
  .layer-2 .row:nth-child(even) {
    transform: translateX(0);
  }
  .layer-3 .row:nth-child(odd) {
    transform: translateX(0);
  }
  .layer-3 .row:nth-child(even) {
    transform: translateX(0);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 992px) {
}
</style>