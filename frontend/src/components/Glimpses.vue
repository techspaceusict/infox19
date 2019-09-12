<template>
  <div ref="glimpses" id="glimpses">
    <Heading anchor=".glimpses" wrapper="#glimpses" :speed="-3"
      >Glimpses</Heading
    >
    <div class="glimpses">
      <div class="container">
        <div class="row m-0 mx-auto justify-content-around text-center">
          <div class="glimpse-card blue col-md-12 col-lg-3">
            <div class="stat">
              <p class="number m-0">10,000</p>
              <p>Stat 1</p>
            </div>
          </div>
          <div class="glimpse-card white col-md-12 col-lg-3">
            <div class="stat">
              <p class="number m-0">5,000</p>
              <p>Stat 2</p>
            </div>
          </div>
          <div class="glimpse-card blue col-md-12 col-lg-3">
            <div class="stat">
              <p class="number m-0">4,000</p>
              <p>Stat 3</p>
            </div>
          </div>
        </div>
        <p class="text my-5 p-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
          tempora quo pariatur nulla consequuntur ratione quia esse?
          Repellendus, natus officiis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#glimpses * {
  z-index: 2;
}
#glimpses {
  margin-top: 5em;
}

.glimpse-card {
  border-radius: 10px;
  width: 100%;
  margin: 0;
  // padding: 10%;
  padding: 2vw 5vh;
  &.blue {
    box-shadow: 15px 15px 50px #1767b8a6;
    background: linear-gradient(#0575e6, #044483);
    color: white;
  }
  &.white {
    box-shadow: 15px 15px 50px #bbbbbba6;
    background: linear-gradient(#dddddd, #bdbdbd);
    color: #0575e6;
  }
}
.glimpses {
  // margin-top: 60%;
  color: white;
}
.number {
  font-size: 4em;
  font-weight: bold;
}
.text {
  font-size: 2.5em;
}

@media only screen and (max-width: 576px) {
  #glimpses .text {
    font-size: 1.5em;
  }
}
</style>