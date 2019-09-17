<template>
  <div class="row m-0 justify-content-center">
    <div class="card full border-0 m-3">
      <div class="card-image"></div>
      <div class="card-body">
        <div class="row m-0 justify-content-end">
          <div class="cross" @click="goBack">&#10006;</div>
        </div>
        <div class="title">EVENT NAME</div>
        <div class="footer">
          <transition name="slide-right">
            <div class="extra" v-if="hover || full">
              <p class="m-0">Team-size: 3</p>
              <p class="m-0">Time: 12PM - 3PM</p>
            </div>
          </transition>
          <p class="date">Oct 11</p>
        </div>
        <transition name="slide-left">
          <div class="info row m-0" v-if="full">
            <div class="col-sm-12 col-md-8 px-0">
              <h4>Description</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam recusandae, incidunt et id velit consequuntur exercitationem nulla sed provident minima.</p>
              <AppButton class="register my-4">Register</AppButton>
            </div>
            <div class="poster ml-auto">
              <img src="" alt="" class="w-100 h-100">
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      full: true,
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  height: 400px;
  width: 300px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.45);
  border-radius: 20px;
}

.card-image {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-image: url('../assets/image.jpg');
  background-position: center;
  background-size: cover;
}
.card-image::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.6);
  transition: all 300ms ease-out;
}

.card-body {
  color: yellow;
  padding: 30px;
  text-align: center;
  text-shadow: 0 0 10px yellow;
  z-index: 2;
}
.title {
  position: relative;
  font-weight: 500;
  font-size: 1.6em;
  margin-top: 30px;
  transition: all 100ms ease-out;
}
.title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -20px;
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
  font-size: 1.6em;
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
  height: 100vh;
  width: 100vw;
  transform: scale(1.02);
  box-shadow: 0 0 0px rgba(255, 255, 255, 0.45);
  border-radius: 0;
  transition: all 500ms ease;
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
  height: 500px;
  border: 1px solid white;
  margin: 0 30px;
  margin-top: -200px;
}
</style>