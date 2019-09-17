<template >

<div class="context" >
  <ul class="circles">
    <div class="card border-0" :class="{ 'full': full }" @mouseover="hover = true" @mouseleave="hover = false" @click="goToEvent">
      <div class="card-image" :style="{ 'background-image': 'url(' + getImgUrl(event.image, 'display') + ')' }"></div>
      <div class="card-body">
        <!-- <div class="title">{{ event.name.toUpperCase() }}</div> -->
        <div class="footer">
          <transition name="slide-right">
            <div class="extra" v-if="hover || full">
              <p class="m-0">Team-size: {{ event.teamSize }}</p>
              <p class="m-0">Time: {{ event.time }}</p>
            </div>
          </transition>
          <p class="date">{{ event.date.split(',')[0] }}</p>
        </div>
        <transition name="slide-left">
          <div class="info row m-0" v-if="full">
            <div class="col-sm-12 col-md-8 px-0">
              <h4>Description</h4>
              <p>{{ event.description }}</p>
              <AppButton class="register my-4">Register</AppButton>
            </div>
            <div class="poster ml-auto">
              <img :src="getImgUrl(event.image, 'poster')" :alt="event.name" class="w-100">
            </div>
          </div>
        </transition>
      </div>
    </div>

            
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
  </ul>
  </div>
    

</template>

<script>

// document.getElementsByClassName("close-btn")[0].addEventListener("click",function(){
//   history.back();
// })

export default {
  props: {
    event: Object
  },
  data() {
    return {
      full: false,
      hover: false
    }
  },
  created() {
    if(this.event.name == this.$route.query.from) {
      this.full = true;
      setTimeout(() => {
        this.full = false;
      }, 10)
    }
  },
  methods: {
    goToEvent() {
      // this.full = !this.full;
      this.full = true;
      setTimeout(() => {
        this.$router.push('/events/' + this.event.name);
      }, 700);
    },
    getImgUrl(img, path) {
      if(path == 'poster') {
        return require('../assets/events/posters/' + img);
      } else if(path == 'display') {
        console.log(img);
        return require('../assets/events/posters/' + img);
      }
    }
  }
}
</script>

<style scoped>
.context {
    width: 100%;
    
    top:50vh;
    
}

.area{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
    
   
}





.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 60px;
    height: 60px;
    animation-delay: 4s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 90px;
    height: 90px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}


.card {
  position: relative;
  height: 400px;  
  width: 300px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.45);
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  transition: all 300ms ease-out;
  transform: rotate(-3deg);
}
.card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.45);
}
.card:hover .card-image::after {
  background: rgba(0, 0, 0, 0.6);
}
.card:hover .title {
  font-size: 1.6em;
}
.card:hover .title::after {
  bottom: -20px;
}
.card:hover .date {
  font-size: 1.6em;
  opacity: 1;
}

.card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-position: center;
  background-size: cover;
}
.card-image::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  transition: all 400ms ease-out;
}

.card-body {
  color: rgba(252, 253, 253, 0.692);
  font-weight: bold;
  padding: 30px;
  text-align: center;
  text-shadow: 0 0 5px rgb(0, 255, 221);
  z-index: 2;
}
.title {
  position: relative;
  font-weight: 500;
  font-size: 1.5em;
  margin-top: 30px;
  transition: all 100ms ease-out;
}
.title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30px;
  width: 20%;
  height: 3px;
  background: yellow;
  transition: all 100ms ease-out;
}
.footer {
  position: absolute;
  bottom: 20px;
  background: transparent;
  text-align: left;
}
.extra {
  margin: 20px 0;
  font-size: 1em;
}
.date {
  font-size: 1.2em;
  opacity: 0;
  transition: font-size 200ms ease-out;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all 300ms ease-out;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all 300ms ease-out 400ms;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.card.full {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  box-shadow: 0 0 0px rgba(255, 255, 255, 0.45);
  border-radius: 0;
  margin: 0;
  z-index: 10;
  transform: rotate(0deg);
  transition: all 800ms ease;
}
.card.full:hover {
  transform: scale(1);
  box-shadow: 0 0 0 white;
}
.card.full .card-image, .card.full .card-image::after {
  border-radius: 0;
}
.card.full .card-image::after {
  background: rgba(0, 0, 0, 0.95);
}
.card.full .card-body {
  text-align: left;
}
.card.full .title {
  transition: all 500ms ease-out;
}
.card.full .title::after {
  left: 0;
  transform: translateX(0);
  transition: all 500ms ease-out;
}
.card.full .footer {
  position: relative;
  margin-top: 60px;
  background: transparent;
  text-align: left;
}

.info {
  color: white;
}
.poster {
  width: 400px;
  height: fit-content;
  border: 1px solid white;
  margin: 0 0px;
  margin-top: -200px;
}
</style>