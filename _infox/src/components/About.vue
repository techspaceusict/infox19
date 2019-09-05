<template>
  <div class="about">
    <div class="text-center my-2" v-rellax="{ speed: -5 }">
      <h1 class="display-2 font-weight-bold text-white">About</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="date">
            Incorporated — <br>
            2014<br><br>
            Maa chudao, gaand marao
          </div>
        </div>
        <div class="col-md-6">
          <div class="temp text-center">
            iX5
          </div>
        </div>
      </div>

    </div>
    <div class="container images" v-rellax="{ speed: 5 }">
      <div class="col-sm-12 border">
        <div class="row p-4">
          <div class="image">

          </div>
          <div class="heading">
            <h2 class="text-white">Lorem ipsum dolor sit, amet </h2>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {

  }
}
</script>

<style scoped>
  .about {
    height: 200vh;
  }
  .about h1 {
    font-size: 20em;
    opacity: 0.1;
  }
  .date {
    font-size: 48px;
    font-weight: 600;
    color: #0575E6;
    filter: drop-shadow(0px 0px 10px rgba(4, 117, 229, 0.6))
  }
  .temp {
    font-size: 200px;
    font-weight: 900;
    letter-spacing: -0.07em;
    color: #0575E6;
    filter: drop-shadow(0px 0px 10px rgba(4, 117, 229, 0.6))
  }
  .heading {
    position: relative;
    margin-left: -50px;
  }
  .heading h2 {
    font-size: 3em;
  }
  .images {
    margin-top: 400px;
  }
  .image {
    height: 500px;
    width: 300px;
    background: rgb(188, 253, 255);
  }
</style>