<template>
  <div ref="ref" id="about" class="glow">
    <Heading anchor=".images" wrapper="#about" :speed="-5"
      >Infoxpression</Heading
    >
    <div class="info container">
      <div class="row">
        <div
          class="col-md-6 text-center d-flex justify-content-center align-items-center"
        >
          <div class="temp">
            <span>i</span>
            <span>X</span>
            <span>5</span>
          </div>
        </div>
        <div
          class="col-md-6 text-center d-flex justify-content-center align-items-center"
        >
          <div class="date">
            Incorporated in
            <br />2014
          </div>
        </div>
      </div>
    </div>

    <div class="container images">
      <section class="image" style="position: relative">
        <div class="row my-5">
          <div class="collage1">
            <div class="i1">
              <img src="../assets/eventImgs/DSC_0080.webp" />
            </div>
            <div class="i2">
              <img src="../assets/eventImgs/DSC_0017.webp" />
            </div>
            <div class="i3">
              <img src="../assets/eventImgs/DSC_0175.webp" />
            </div>
            <div class="i4">
              <img src="../assets/eventImgs/DSC_0189.webp" />
            </div>
            <div class="i5">
              <img src="../assets/eventImgs/DSC_0199.webp" />
            </div>
            <div class="i6">
              <img src="../assets/eventImgs/DSC_0272.webp" />
            </div>
            <div class="i7">
              <img src="../assets/eventImgs/DSC_0288.webp" />
            </div>
            <div class="i8">
              <img src="../assets/eventImgs/DSC_0389.webp" />
            </div>
          </div>
          <div
            class="collage2"
            v-rellax="{ speed: 2, wrapper: '.image', relativeToWrapper: true }"
          >
            <!-- <div class="i1">
              <img src="../assets/eventImgs/DSC_0080.webp" />
            </div>
            <div class="i2">
              <img src="../assets/eventImgs/DSC_0017.webp" />
            </div>
            <div class="i3">
              <img src="../assets/eventImgs/DSC_0175.webp" />
            </div>
            <div class="i4">
              <img src="../assets/eventImgs/DSC_0189.webp" />
            </div> -->
          </div>
          <div class="text p-5">
            <p class="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              deserunt!
            </p>
          </div>
        </div>
      </section>
      <section class="image second" style="position: relative">
        <div class="row my-5">
          <div class="text p-5">
            <p class="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              deserunt!
            </p>
          </div>
          <div class="collage1">
            <div class="i1">
              <img src="../assets/eventImgs/DSC_0080.webp" />
            </div>
            <div class="i2">
              <img src="../assets/eventImgs/DSC_0017.webp" />
            </div>
            <div class="i3">
              <img src="../assets/eventImgs/DSC_0175.webp" />
            </div>
            <div class="i4">
              <img src="../assets/eventImgs/DSC_0189.webp" />
            </div>
            <div class="i5">
              <img src="../assets/eventImgs/DSC_0199.webp" />
            </div>
            <div class="i6">
              <img src="../assets/eventImgs/DSC_0272.webp" />
            </div>
            <div class="i7">
              <img src="../assets/eventImgs/DSC_0288.webp" />
            </div>
            <div class="i8">
              <img src="../assets/eventImgs/DSC_0389.webp" />
            </div>
          </div>
          <div
            class="collage2"
            v-rellax="{
              speed: 2,
              wrapper: '.image.second',
              relativeToWrapper: true
            }"
          >
            <div class="i1">
              <img src="../assets/eventImgs/DSC_0080.webp" />
            </div>
            <div class="i2">
              <img src="../assets/eventImgs/DSC_0017.webp" />
            </div>
            <div class="i3">
              <img src="../assets/eventImgs/DSC_0175.webp" />
            </div>
            <div class="i4">
              <img src="../assets/eventImgs/DSC_0189.webp" />
            </div>
          </div>
        </div>
      </section>
      <!-- <div class="col-sm-12 my-5">
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
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
#about * {
  z-index: 2;
}
#about {
  margin-top: -40em;
}
.glow h1,
h2 {
  /* // font-size: 15em; */
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.6));
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
/* // .para p {
//   font-size: 1.2em;
//   &.right {
//     text-align: right;
//   }
//   &.left {
//     text-align: left;
//   }
// } */
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
  /* // box-shadow: 0 0 50px rgba(255, 255, 255, 0.2); */
  padding: 10px 30px;
}

/* // .images {
//   position: relative;
// } */
.image {
  position: relative;
}
.collage1 {
  width: 50%;
  height: 600px;
  background: rgb(234, 234, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  background: transparent;
}

.collage1 > div {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 5px gray;
}
.collage1 > div > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(1) translate(-50%, -50%);
  /* transition: transform 0.2s ease-in-out;  */
}

.collage1 .i1 {
  grid-area: 1/1/3/3;
}
.collage1 .i1 > img {
  height: 100%;
}
.collage1 .i2 {
  grid-area: 1/3/2/4;
}
.collage1 .i2 > img {
  height: 100%;
}
.collage1 .i3 {
  grid-area: 1/4/2/5;
}
.collage1 .i3 > img {
  height: 100%;
}
.collage1 .i4 {
  grid-area: 2/3/3/5;
}
.collage1 .i4 > img {
  width: 100%;
}
.collage1 .i5 {
  grid-area: 3/1/4/3;
}
.collage1 .i5 > img {
  width: 100%;
}
.collage1 .i6 {
  grid-area: 4/1/5/2;
}
.collage1 .i6 > img {
  height: 100%;
}
.collage1 .i7 {
  grid-area: 4/2/5/3;
}
.collage1 .i7 > img {
  height: 100%;
}
.collage1 .i8 {
  grid-area: 3/3/5/5;
}
.collage1 .i8 > img {
  height: 100%;
}
/* 
.collage1 img:hover{transform:scale(1.2) translate(-50%,-50%);} */

.collage2 {
  position: absolute;
  top: 30%;
  left: 40%;
  width: 50%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 15px 15px 50px #1767b8a6;
  background: linear-gradient(#0575e6, #044483);
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
  /* display: grid; */
  /* grid-template-columns: auto auto; */
  /* grid-template-rows: auto auto auto; */
  /* grid-gap: 10px; */
  /* background: transparent; */
}

.collage2 > div {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px black;
}
.collage2 > div > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.collage2 .i1 {
  grid-area: 1/1/3/2;
}
.collage2 .i1 > img {
  height: 100%;
}
.collage2 .i2 {
  grid-area: 3/1/4/2;
}
.collage2 .i2 > img {
  width: 100%;
}
.collage2 .i3 {
  grid-area: 1/2/2/3;
}
.collage2 .i3 > img {
  width: 100%;
}
.collage2 .i4 {
  grid-area: 2/2/4/3;
}
.collage2 .i4 > img {
  height: 100%;
}

.image.second .collage2 {
  left: 10%;
}
.text {
  width: 50%;
  font-size: 1.5em;
}

/* // .image {
//   width: 75%;
//   height: 300px;
//   overflow: hidden;
//   box-shadow: 10px 10px 10px rgba(10, 7, 160, 0.507);
//   // transition: all 550ms ease-out;
// }
// .image:hover {
//   outline-offset: 10px;
//   outline: 5px solid #0575e6;
//   transform: scale(1.05) !important;
// } */

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

@media only screen and (max-width: 576px) {
  .temp {
    font-size: 150px;
  }
  #about .date {
    font-size: 32px;
  }
  /* .collage1 .i5,.collage1 .i6,
  .collage1 .i7,.collage1 .i8,
  .collage2 .i5,.collage2 .i6,
  .collage2 .i7,.collage2 .i8{
    display:none;
  } */

  .collage2 {
    display: none;
  }
  .collage1 {
    margin: 0 auto;
  }

  .collage1 .i1 {
    grid-area: 1/1/2/5;
  }
  .collage1 .i1 > img {
    width: 100%;
    height: auto;
  }
  .collage1 .i2 {
    grid-area: 2/1/3/3;
  }
  .collage1 .i2 > img {
    height: 100%;
  }
  .collage1 .i3 {
    grid-area: 2/3/3/5;
  }
  .collage1 .i3 > img {
    height: 100%;
  }
  .collage1 .i4 {
    grid-area: 3/1/4/5;
  }
  .collage1 .i4 > img {
    width: 100%;
  }
  .collage1 .i5 {
    grid-area: 4/1/5/3;
  }
  .collage1 .i5 > img {
    height: 100%;
    width: auto;
  }
  .collage1 .i6 {
    grid-area: 4/3/5/5;
  }
  .collage1 .i6 > img {
    height: 100%;
  }
  .collage1 .i7 {
    grid-area: 4/2/5/3;
    display: none;
  }
  .collage1 .i7 > img {
    height: 100%;
  }
  .collage1 .i8 {
    grid-area: 3/3/5/5;
    display: none;
  }
  .collage1 .i8 > img {
    height: 100%;
  }
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
  .collage1 {
    width: 75%;
    height: 600px;
    background: transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .collage2 {
    left: 40% !important;
  }
  .text {
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