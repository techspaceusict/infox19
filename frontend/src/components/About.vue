<template>
  <div class="glow">
    <div
      class="title text-center"
      v-rellax="titleRellax"
      data-aos="title"
      data-aos-anchor=".info"
    >
      <h1 class="display-2 font-weight-bold text-white">About Us</h1>
    </div>
    <div v-rellax="{ speed: 1 }" class="info container">
      <div class="row">
        <div class="col-md-6 text-center">
          <div class="date">
            Incorporated in
            <br />2014
            <br />
            <br />
          </div>
        </div>
        <div class="col-md-6">
          <div class="temp text-center">iX5</div>
        </div>
      </div>
    </div>

    <div class="container images">
      <div class="col-sm-12" v-rellax="{ speed: 1 }">
        <div class="row">
          <div class="image col-sm-4" v-rellax="{ speed: 1 }"></div>
          <div class="col-sm-8 text-white">
            <div class="heading  text-right">
              <h2 class="text-white">What we do</h2>
            </div>
            <div class="para">
              <p class="right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita rerum, sunt inventore ea recusandae doloribus atque,
                laboriosam nemo molestiae, dolor saepe excepturi fuga earum?
                Consequuntur ab dolore explicabo odit magnam dolores placeat,
                nulla earum quos perferendis labore natus doloremque quis
                tempora inventore illum voluptatibus animi laborum eos. At,
                molestias suscipit?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12" v-rellax="{ speed: 1 }">
        <div class="row">
          <div class="col-sm-8 text-white">
            <div class="heading">
              <h2 class="text-white">Lorem ipsum dolor sit, amet</h2>
            </div>
            <div class="para text-right">
              <p class="left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita rerum, sunt inventore ea recusandae doloribus atque,
                laboriosam nemo molestiae, dolor saepe excepturi fuga earum?
                Consequuntur ab dolore explicabo odit magnam dolores placeat,
                nulla earum quos perferendis labore natus doloremque quis
                tempora inventore illum voluptatibus animi laborum eos. At,
                molestias suscipit?
              </p>
            </div>
          </div>
          <div class="image col-sm-4" v-rellax="{ speed: 1 }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleRellax: {
        speed: -2
      }
    };
  },
  methods: {
    handleScroll(event) {
      console.log("scrolling", event);
    }
  },
  created() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
.glow {
  height: 200vh;
}
.glow h1,
h2 {
  font-size: 15em;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.6));
}
.title {
  margin-top: 0;
}
[data-aos="title"] {
  opacity: 1;
  transition-property: opacity;
}
[data-aos="title"].aos-animate {
  opacity: 0.1;
}
.info {
  margin-top: 100px;
}
.date {
  font-size: 48px;
  font-weight: 600;
  color: #0575e6;
  filter: drop-shadow(0px 0px 10px rgba(4, 117, 229, 0.6));
}
.temp {
  font-size: 200px;
  font-weight: 900;
  letter-spacing: -0.07em;
  color: #0575e6;
  filter: drop-shadow(0px 0px 10px rgba(4, 117, 229, 0.6));
}
.heading {
  position: relative;
  margin-left: 0;
}
.heading h2 {
  font-size: 3em;
}
.para p {
  font-size: 1.2em;
  &.right {
    text-align: right;
  }
  &.left {
    text-align: left;
  }
}

.images {
  margin-top: 200px;
}
.image {
  height: 400px;
  margin-top: 100px;
  /* background: rgb(188, 253, 255); */
  box-shadow: 10px 10px 10px rgba(10, 7, 160, 0.507);
}
.image:nth-child(1) {
  background-image: url("../assets/about-image1.jpg");
  background-size: cover;
  background-position: center;
}
.image:nth-child(2) {
  background-image: url("../assets/about-image2.jpg");
  background-size: cover;
  background-position: center;
}
</style>