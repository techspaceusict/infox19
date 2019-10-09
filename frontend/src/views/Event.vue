<template>
  <div class="row m-0 justify-content-center">
    <div class="card border-0" :class="{ full: full }">
      <div
        class="card-image"
        :style="{
          'background-image': 'url(' + getImgUrl(event.image, 'display') + ')'
        }"
      ></div>
      <div class="card-body">
        <div class="text-white close-btn mx-2" @click="goBack">&#10006;</div>

        <div class="eventContainer">
          <div class="eventBody">
            <!-- <transition name="slide-left"> -->
            <div class="title">{{ event.name.toUpperCase() }}</div>

            <div class="info row m-0" v-if="full">
              <div>
                <p v-html="event.description">{{}}</p>
              </div>
            </div>
            <div class="footer">
              <!-- <transition name="slide-right"> -->
              <div class="extra" v-if="full">
                <p class="m-0">
                  <img src="../assets/calendar.svg" />
                  {{
                  event.date.split(",")[0]
                  }}
                </p>
                <p class="m-0" v-if="event.teamSize">
                  <img src="../assets/team.svg" />
                  {{ event.teamSize }}
                </p>
                <p class="m-0">
                  <img src="../assets/clock.svg" />
                  {{ event.time }}
                </p>
              </div>
              <!-- </transition> -->

              <div class="contacts">
                <!-- <div class="contact-title">For queries, contact -</div> -->
                <div class="organizers">
                  <div v-for="(org, i) in event.organizers" :key="i">
                    <div>{{ org.name }}</div>
                    <div> <a :href="'tel:' + org.contact">{{ org.contact }}</a></div>
                  </div>
                </div>
              </div>
              <AppButton class="register my-4" @click="openForm(event.link)">
                Register
              </AppButton>
              <AppButton class="register my-4 ml-4" v-if="event.ruleBook" @click="openForm(event.ruleBook)">
                Rule Book
              </AppButton>

              <!-- <div class="g-signin2" id="google-signin-button" data-onsuccess="onSignIn"></div> -->
              <!-- <button class="Gsignin" @click="GsignIn">Google</button>
              <button class="Fsignin" @click="FsignIn">Facebook</button>-->
              <!-- <button>Register</button> -->
            </div>

            <!-- </transition> -->
          </div>

          <div class="poster ml-auto">
            <img :src="getImgUrl(event.image, 'poster')" :alt="event.name" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import events from "../assets/events/eventsData.json";

export default {
  mounted() {
    gapi.signin2.render("google-signin-button", {
      onsuccess: this.onSuccess,
      onfailure: this.onFailure
    });
  },
  data() {
    return {
      full: true,
      location: 0
    };
  },
  computed: {
    event() {
      let event = events.find(e => e.name == this.$route.params.eventName);
      console.log(event);
      if (event) {
        return event;
      } else {
        return {};
      }
    }
  },
  created() {
    let location = this.$route.params.location;
    console.log(location);
    if(location) {
      this.location = location;
    }
  },
  methods: {
    openForm(link){
      window.open(link,'_blank')
    },
    goBack() {
      console.log(this.event.name);
      this.$router.push({ name: "events", params: { from: this.event.name, location: this.location } });
    },
    getImgUrl(img, path) {
      if (path == "poster") {
        return require("../assets/events/posters/" + img);
      } else if (path == "display") {
        return require("../assets/events/posters/" + img);
      }
    },
    onSuccess(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
    onFailure(err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss" scoped>
.abcRioButton {
  background: transparent;
}

.abcRioButtonIconImage > svg {
  width: 40px !important;
  height: 40px !important;
}
.abcRioButtonContents {
  display: none;
}

.eventContainer {
  display: flex;
  height: 100%;
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
.reg-btn {
  background: white;
  color: black;
  width: 120px;
  height: 40px;
  margin-bottom: 5px;
}

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
  background-image: url("../assets/image.jpg");
  
  background-position: center;
  background-size: cover;
}
.card-image::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 300ms ease-out;
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
// .card-body {
//   padding: 0;
//   text-align: center;
//   z-index: 2;
//   display: flex;
//   flex-direction: column;
// }

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
//   bottom: -20px;
//   width: 20%;
//   height: 3px;
//   background: #05c5ff;
//   transition: all 100ms ease-out;
// }
.footer {
  position: absolute;
  bottom: 20px;
  background: transparent;
  text-align: left;
  color: white;

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

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
.extra {
  font-size: 1.3em;
  margin: 20px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 10%;
    margin: 8px;
  }
  display: flex;
  justify-content: space-between;
}
.date {
  font-size: 1.6em;
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
  position: absolute;
  top: 0;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
  /* transform: scale(1.02); */
  box-shadow: 0 0 0px rgba(255, 255, 255, 0.45);
  border-radius: 0;
  z-index: 10;
  transition: all 500ms ease;
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
  margin-top: 100px;
}
.poster {
  width: 400px;
  height: fit-content;
  border: 1px solid white;
  margin: 0 auto;
}

.ml-auto {
  margin-left: 0;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 1.2em;
  cursor: pointer;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.384);
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
@media screen and (max-width: 540px) {
  .extra {
    flex-direction: column;
  }
}
@media screen and (max-width: 415px) {
  .register {
    display: block;
    margin: 30px auto !important;
  }
}
</style>