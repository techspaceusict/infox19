<template>
  <div class="glow">
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
      <div class="col-sm-12" v-rellax="{ speed: 1 }">
        <div class="row">
          <div class=" col-sm-4" v-rellax="{ speed: 1 }">
            <img src="../assets/about-image1.jpg" alt="" class="image" />
          </div>
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
          <div class="col-sm-4" v-rellax="{ speed: 1 }">
            <img src="../assets/about-image2.jpg" alt="" class="image" />
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
  height: 300px;
  width: 150%;
  overflow: hidden;
  margin-top: 100px;
  box-shadow: 10px 10px 10px rgba(10, 7, 160, 0.507);
  // outline: 15px solid #0575e6;
  filter: drop-shadow(0px 0px 10px rgba(4, 117, 229, 0.6));
  transition: all 350ms ease-out;
}
.image:hover {
  outline-offset: 10px;
  outline: 5px solid #0575e6;
  transform: scale(1.1);
}
.image:nth-child(1) {
  background-image: url("../assets/about-image1.jpg");
  background-size: cover;
  background-position: center;
}
// .image:nth-child(2) {
//   background-image: url("../assets/about-image2.jpg");
//   background-size: cover;
//   background-position: center;
// }
</style>