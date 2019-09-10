<template>
  <div id="about" class="glow">
    <Heading anchor=".info" :speed="-3">About Us</Heading>
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
      <div class="col-sm-12 my-5">
        <div class="row">
          <div class="image col-sm-8" data-aos="fade-up" data-aos-duration="1000">
            <img src="../assets/about-image1.jpg" alt="" class="w-100" />
          </div>
          <div class="info-card text-white">
            <div class="heading text-right" data-aos="text-fade-down">
              <h2 class="text-white display-4">What we do</h2>
            </div>
            <div class="para" data-aos="text-fade-down" data-aos-anchor=".heading" data-aos-delay="200">
              <p class="right">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam provident est ullam, ipsum recusandae laboriosam?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 my-5 py-5">
        <div class="row">
          <div class="image" data-aos="fade-up" data-aos-duration="1000">
            <img src="../assets/about-image2.jpg" alt="" class="w-100" />
          </div>
          <div class="info-card text-white">
            <div class="heading text-right second" data-aos="text-fade-down">
              <h2 class="text-white display-4">Lorem ipsum dolor sit, amet</h2>
            </div>
            <div class="para text-right" data-aos="text-fade-down" data-aos-anchor=".heading.second" data-aos-delay="200">
              <p class="left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nihil? Quo omnis sapiente aliquid tempora?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.glow {
  height: 200vh;
}
.glow h1,
h2 {
  // font-size: 15em;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.6));
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
// .para p {
//   font-size: 1.2em;
//   &.right {
//     text-align: right;
//   }
//   &.left {
//     text-align: left;
//   }
// }
.para p {
  font-size: 1.2em;
  text-align: right;
}

.info-card {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 40%;
  background: rgb(15, 15, 15);
  // box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  padding: 10px 30px;
}
.image {
  width: 75%;
  height: 300px;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(10, 7, 160, 0.507);
  // transition: all 550ms ease-out;
}
.image:hover {
  outline-offset: 10px;
  outline: 5px solid #0575e6;
  transform: scale(1.05) !important;
}

[data-aos="text-fade-down"] {
  transform: translateY(-30px);
  opacity: 0;
}
[data-aos="text-fade-down"].aos-animate {
  transform: translateY(0);
  opacity: 1;
}
[data-aos="image"] {
  height: 0;
  transition-property: height;
}
[data-aos="image"].aos-animate {
  height: fit-content;
}


@media only screen and (max-width: 768px) {
  .display-4 {
    font-size: 2em !important;
  }
  .image {
    width: 100%;
  }
  .info-card {
    position: relative;
    width: 100%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>