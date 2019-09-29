<template>
  <div class="context">
    <Heading anchor="" wrapper=".context" :speed="0" onPage>Events</Heading>

    <ul class="circles">
      <div style="z-index:100;" id="events">
        <div class="eventsSection">
          <div class="eventsFlex" v-for="(type, i) in eventFilters" :key="i">
            <div class="eventType">{{ type }}</div>
            <div class="eventsInfo">
              <div
                class="d-flex"
                v-for="(event, i) in filterEvents(events, type)"
                :key="i"
              >
                <CardDesign :event="event" />
                <div class="eventName">{{ event.name.toUpperCase() }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="eventsSection">
        <div class="eventNavs">
            <div>Programming</div>
            <div>Development</div>
            <div>Electronics</div>
            <div>Cyber Security</div>
            <div>ML/AI</div>
            <div>Hackathons</div>
            <div>Meetups</div>
            <div>Corporate</div>
            <div>Fun & Literary</div>
        </div>
        <div class="eventsPosters">
            <div v-for="(event, i) in events" :key="i">
                <img :src="getImgUrl(event.image)" class="poster">
                <div>{{event.name}}</div>
            </div>
        </div>
    </div> -->
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
import events from "../assets/events/eventsData.json";
import CardDesign from "@/components/CardDesign";
// import Heading from '@/../UI/Heading';

events.sort((event1, event2) => {
  return Number(event1.type.priority) - Number(event2.type.priority);
});
var eventTypeSet = events.map(({ type }) => {
  return type.name;
});
var set = new Set(eventTypeSet);

console.log(set);

export default {
  components: {
    CardDesign
  },
  data() {
    return {
      events,
      eventFilters: set
    };
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/events/posters/" + img);
    },
    filterEvents: (events, type) => {
      return events.filter(event => {
        let regexPatt = new RegExp(type, "g");
        return event.type.name.match(regexPatt);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
template {
  position: fixed;
  background-attachment: fixed;
}

.context {
  width: 100%;
  top: 50vh;
  background-attachment: fixed;
  .title {
    padding-top: 0;
  }
}

.eventFilters {
  color: white;
}
.area {
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100vw;
  height: 1000vh;
  position: fixed;
  background-attachment: fixed;
}

.circles {
  padding: 0;
}

.contact-parent-wrapper {
  color: white;
  // text-transform: uppercase;
  // text-align: center;
  font-weight: 300 !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}
.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.16);
  animation: animate 25s linear infinite;
  bottom: -150px;
  position: fixed;
  z-index: -1;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 60px;
  height: 60px;
  animation-delay: 4s;
  animation-duration: 15s;
}

.circles li:nth-child(2) {
  left: 8%;
  width: 30px;
  height: 30px;
  animation-delay: 2s;
  animation-duration: 40s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 40px;
  height: 40px;
  animation-delay: 4s;
  animation-duration: 50s;
}

.circles li:nth-child(4) {
  left: 5%;
  width: 60px;
  height: 60px;
  animation-delay: 2s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 90px;
  height: 90px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
  animation-duration: 10s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
  color: beige;
}
.circles li:nth-child(11) {
  left: 10%;
  width: 60px;
  height: 60px;
  animation-delay: 4s;
}
.circles li:nth-child(12) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 4s;
}
.circles li:nth-child(13) {
  left: 25%;
  width: 90px;
  height: 90px;
}
.circles li:nth-child(14) {
  left: 30%;
  width: 60px;
  height: 60px;
  animation-delay: 8s;
}
.circles li:nth-child(15) {
  left: 35%;
  width: 100px;
  height: 100px;
  animation-duration: 11s;
}

.circles li:nth-child(16) {
  left: 60%;
  width: 45px;
  height: 45px;
  animation-delay: 15s;
  animation-duration: 45s;
}
.circles li:nth-child(17) {
  left: 50%;
  width: 45px;
  height: 45px;
  animation-delay: 5s;
  animation-duration: 15s;
}
.circles li:nth-child(18) {
  left: 30%;
  width: 65px;
  height: 65px;
  animation-delay: 2s;
  animation-duration: 35s;
}
.circles li:nth-child(19) {
  left: 60%;
  width: 40px;
  height: 40px;
  animation-delay: 15s;
  animation-duration: 25s;
}
.circles li:nth-child(20) {
  left: 40%;
  width: 55px;
  height: 55px;
  animation-delay: 10s;
  animation-duration: 15s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0.7;
    border-radius: 50%;
  }
}

// #events *{z-index: 2;}
#events {
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  // .eventsSection * {
  //   z-index: 2;
  // }
  .eventsSection {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .eventNavs {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      font-size: 30px;
      color: #2182ff;
      font-weight: bold;
      position: sticky;
      top: 10px;
      align-content: center;

      > div {
        margin-top: 20px;
        margin-bottom: 20px;
        transition: color 0.3s, text-shadow 0.3s, transform 0.3s;
      }
      > div:hover {
        color: rgba(255, 255, 255, 0.877);
        text-shadow: 0 0 20px #2182ff;
        transform: scale(1.3);
        cursor: pointer;
      }
    }
    .eventsFlex {
      width: 100%;
      margin-bottom: 100px;
    }
    .eventsInfo {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .eventPosters {
      color: white;
    }

    .eventType {
      color: #dcf2f0;
      text-transform: uppercase;
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 1.5px;
      text-shadow: 0 0 20px #00b2ff;
      text-align: center;
    }

    .d-flex {
      &:nth-child(even) {
        background: linear-gradient(to left, #9cecfb, #65c7f7, #0052d4);
        box-shadow: 10px 10px 100px rgba(255, 255, 255, 0.24);
        .eventName {
          color: white !important;
        }
      }
      &:nth-child(odd) {
        background: linear-gradient(to left, #9cecfb, #65c7f7, #0052d4);
        box-shadow: 10px 10px 100px #0576e65b;
        .eventName {
          color: white !important;
        }
      }
      border-radius: 10px;
      background: #272727a6;
      margin: 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      .eventName {
        color: #249bf3cc;
        font-weight: bold;
        text-align: right;
        font-size: 21px;
        text-shadow: 0 0 2px #9a9a9a;
        padding: 10px;
        position: absolute;
        bottom: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        right: 0;
      }
    }

    @media screen and (max-width: 1020px) {
      .eventsInfo {
        justify-content: center;
      }
    }

    @media screen and (max-width: 768px) {
      .d-flex {
        > div:nth-child(1) {
          width: 80vw;
          &.full {
            width: 100vw;
          }
        }
      }
      .eventType {
        font-size: 8vw;
      }
    }
  }
}
.card-event {
  // margin: 20px;
}
</style>