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
              <p class="number m-0">6000+</p>
              <p>Students in Campus</p>
            </div>
          </div>
          <div class="glimpse-card white col-md-12 col-lg-3">
            <div class="stat">
              <p class="number m-0">116</p>
              <p>Affiliated Colleges</p>
            </div>
          </div>
          <div class="glimpse-card blue col-md-12 col-lg-3">
            <div class="stat">
              <p class="number m-0">25+</p>
              <p>Events</p>
            </div>
          </div>
        </div>
        <div class="gdata">
        <p class="text my-5 p-5 text-center">
         With a footfall of over <b>7000+</b> our last year's event was a huge success. 
           
        </p>
        <p class="text my-5 p-3 text-center">
          This year the crowd expectancy has increased to over <b>9000</b>.
        </p>
        <p class="text my-5 p-2 text-center">
          A major breakthrough is the <b>30,000</b> students in affiliated colleges of GGSIPU.
        </p>
        <p class="text my-5 p-2 text-center">
          We have over <b>8000+</b> registrations 
         expected on the website this year for <b>25+ events</b> lined up for all kinds of audience.
        </p>
        </div>
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
  margin:0;
}

@media only screen and (max-width: 992px){
  .glimpse-card{
    margin-top:20px;
    margin-bottom:20px;
  }
}

@media only screen and (max-width: 576px) {
  #glimpses .text {
    font-size: 1.5em;
  }

  .glimpse-card{
    margin-top:20px;
    margin-bottom:20px;
  }
}
</style>