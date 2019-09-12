<template>
  <div ref="sponsors" id="sponsors">
    <Heading
      :subHeading="'Previous'"
      anchor=".sponsors"
      wrapper="#sponsors"
      :speed="-6"
      >Sponsors</Heading
    >
    <div class="sponsors">
      <div class="absoulte layer-1" v-rellax="layer1">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="sponsor-item barista"></div>
            <div class="sponsor-item codingBlock"></div>
            <div class="sponsor-item codingNinja"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item Paytm"></div>
            <div class="sponsor-item redbull"></div>
            <div class="sponsor-item reliance"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item incubateind"></div>
            <div class="sponsor-item redwolf"></div>
            <div class="sponsor-item codeStreet"></div>
          </div>
        </div>
      </div>
      <div class="absoulte layer-2" v-rellax="layer2">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="sponsor-item designcut"></div>
            <div class="sponsor-item earning_labs"></div>
            <div class="sponsor-item agro"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item enactus_igdtu"></div>
            <div class="sponsor-item domainX"></div>
            <div class="sponsor-item blogx"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item gamex"></div>
            <div class="sponsor-item gaming"></div>
            <div class="sponsor-item Hidden_Hour"></div>
          </div>
        </div>
      </div>
      <div class="absoulte layer-3" v-rellax="layer3">
        <div class="container-fluid">
          <div class="row justify-content-around">
            <div class="sponsor-item ED"></div>
            <div class="sponsor-item HouseOfAmigos"></div>
            <div class="sponsor-item josh-logo-square"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item microHost"></div>
            <div class="sponsor-item Podio"></div>
            <div class="sponsor-item reappoint"></div>
          </div>
          <div class="row justify-content-around">
            <div class="sponsor-item streetHack"></div>
            <div class="sponsor-item wall"></div>
            <div class="sponsor-item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    }
  }
};
</script>

<style lang="scss" scoped>
#sponsors * {
  z-index: 2;
}
#sponsors {
  margin-top: -40em;
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
  margin: 30px 0;
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
  background-image: url("../assets/sponsors/codingBlock.png");
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
  background-image: url("../assets/sponsors/microHost.png");
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

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  .sponsor-item {
    width: 6em !important;
    height: 6em !important;
    opacity: 1 !important;
    margin: 20px 0;
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