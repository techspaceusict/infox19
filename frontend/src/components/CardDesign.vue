<template >
  <div
    class="card border-0"
    :class="{ 'full': full }"
    :id="event.name"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="goToEvent"
  >
    <div
      class="card-image"
      :style="{ 'background-image': 'url(' + getImgUrl(event.image, 'display') + ')' }"
    ></div>
    <div class="card-body">
      <div class="eventContainer">
        <div class="eventBody">
          <transition name="slide-left">
            <div class="title" v-if="full">{{ event.name.toUpperCase() }}</div>
          </transition>

          <transition name="slide-left">
            <div class="info row m-0" v-if="full">
              <div>
                <p v-html="event.description">{{}}</p>
              </div>
            </div>
          </transition>

          <div class="footer">
            <transition name="slide-right">
              <div class="extra" v-if="hover || full">
                <div class="m-0">
                  <img src="../assets/calendar.svg" />
                  {{
                  event.date.split(",")[0]
                  }}
                </div>
                <div class="m-0" v-if="event.teamSize">
                  <img src="../assets/team.svg" />
                  {{ event.teamSize }}
                </div>
                <div class="m-0">
                  <img src="../assets/clock.svg" />
                  {{ event.time }}
                </div>
              </div>
            </transition>

            <transition name="slide-left">
              <div v-if="full">
                <div class="contacts">
                  <div class="organizers">
                    <div v-for="(org, i) in event.organizers" :key="i">
                      <div>{{ org.name }}</div>
                      <div>{{ org.contact }}</div>
                    </div>
                  </div>
                </div>
                <AppButton class="register my-4">
                  <a
                    href=" https://docs.google.com/forms/d/e/1FAIpQLSfBkD8TaxQO26GLqeWHKb0zuyOhwC1W_2ssUiYVhI9FRk78EA/viewform "
                    target="_blank"
                  >Register</a>
                </AppButton>
              </div>
            </transition>
          </div>
        </div>

        <transition name="slide-left">
          <div class="poster ml-auto" v-if="full">
            <img :src="getImgUrl(event.image, 'poster')" :alt="event.name" class="w-100" />
          </div>
        </transition>
      </div>
    </div>
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
    };
  },
  created() {
    if(this.event.name == this.$route.params.from) {
      this.full = true;
      setTimeout(() => {
        this.full = false;
      }, 10);
    }
  },
  methods: {
    goToEvent() {
      // this.full = !this.full;
      this.full = true;
      let location = document.getElementById(this.event.name).getBoundingClientRect().top;
      location = Math.round(location);
      setTimeout(() => {
        this.$router.push({ name: "event", params: { eventName: this.event.name, location: location } });
      }, 700);
    },
    getImgUrl(img, path) {
      if (path == "poster") {
        return require("../assets/events/posters/" + img);
      } else if (path == "display") {
        return require("../assets/events/posters/" + img);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.eventContainer {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  overflow: auto;
  .eventBody {
    width: 50%;
    margin-left: 50px;
  }
  align-items: center;
  .row {
    margin: 0;
  }
}
.extra {
  font-size: 1.3em;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 10%;
    margin: 8px;
  }
}
.card.full .extra {
  display: flex;
  justify-content: space-between;
}

.card {
  position: relative;
  height: 400px;
  width: 300px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.45);
  border-radius: 20px;
  margin: 20px;
  margin-bottom: 100px;
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
// .card:hover .title {
//   font-size: 1.6em;
// }
// .card:hover .title::after {
//   bottom: -20px;
// }
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
  content: "";
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
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-shadow: 0 0 5px rgb(0, 255, 221);
}
.title {
  position: relative;
  font-weight: 500;
  font-size: 2.5em;
  margin-top: 30px;
  transition: all 100ms ease-out;
  color: white;
  text-shadow: 0 0 20px #05c5ff;
  border-bottom: 3px solid #05c5ff;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
// .title::after {
//   content: '';
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   bottom: -30px;
//   width: 20%;
//   height: 3px;
//   background: #05c5ff;
//   transition: all 100ms ease-out;
// }
.footer {
  position: absolute;
  bottom: 20px;
  left: 0;
  background: transparent;
  text-align: left;

  .contacts {
    margin-top: 50px;
    .contact-title {
      font-size: 24px;
    }
    .organizers {
      display: flex;
      justify-content: space-between;

      > div > div:nth-child(1) {
        font-size: 20px;
        text-transform: uppercase;
      }
    }
  }
}
.date {
  font-size: 1.2em;
  opacity: 0;
  transition: font-size 200ms ease-out;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 300ms ease-out;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all 300ms ease-out 400ms;
}
.slide-left-enter,
.slide-left-leave-to {
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
.card.full .card-image,
.card.full .card-image::after {
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
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .card-body {
    padding: 10px;
    .eventContainer {
      margin-top: 20px;
      flex-direction: column-reverse;
      .eventBody {
        width: 90%;
        margin-left: 0;
      }
      .extra {
        font-size: 1.2em;
      }
      .poster {
        width: 80%;
        margin-top: 50px;
      }
    }
  }
}
</style>