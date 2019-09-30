<template>
<div class="context">
  <div
    class="contact-parent-wrapper"
    style="align-items: center; margin-top:7vh"
  > 
    <div class="title-section">
      <Heading anchor="" wrapper=".contact-parent-wrapper" :speed="0" onPage
      >Schedule</Heading>
      
    </div>
    <div class="parent_div" style="position: relative; top: -10vh;">
      <div class="day_1 wow bounceInLeft">
        <h1 class="about-content" style="font-weight: 400; font-size:4rem; color: #dcf2f0;
      text-transform: uppercase;
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 1.5px;
      text-shadow: 0 0 20px #00b2ff;
      text-align: center;">
          Day 1 (Oct 11)
        </h1>

        <!-- </div> -->
        <div class="grid_container_1">
          <div class="item1_1 normal infox_cell">
            Info<span style="color:red;">X</span>
          </div>
          <div class="item2_1 normal time_cell">10-10:30</div>
          <div class="item3_1 normal time_cell">10:30-12</div>
          <div class="item4_1 normal time_cell">12-1</div>
          <div class="item5_1 normal time_cell">1-2</div>
          <div class="item6_1 normal time_cell">2-3</div>
          <div class="item7_1 normal time_cell">3-4</div>
          <div class="item8_1 normal time_cell">4-5</div>
          <div class="place1_1 normal place_cell"><p>D-Audi</p></div>
          <div class="place2_1 normal place_cell"><p>E-109</p></div>
          <div class="place3_1 normal place_cell"><p>E-Labs</p></div>
          <div class="place7_1 normal place_cell"><p>Electronics-Labs</p></div>
          <div class="place4_1 normal place_cell"><p>D-Labs</p></div>
          <div class="place5_1 normal place_cell"><p>E-Audi</p></div>
          <div class="place6_1 normal place_cell">
            <p>
              Central<br />
              Arena
            </p>
          </div>
          <!-- <div class="empty1_1"></div>
          <div class="empty2_1"></div>
          <div class="empty3_1"></div>
          <div class="empty4_1"></div>
          <div class="empty5_1"></div>
          <div class="empty6_1"></div>
          <div class="empty7_1"></div>
          <div class="empty8_1"></div>
          <div class="empty9_1"></div>
          <div class="empty10_1"></div>
          <div class="empty11_1"></div>
          <div class="empty12_1"></div>
          <div class="empty13_1"></div>
          <div class="empty14_1"></div>
          <div class="empty15_1"></div> -->
          <div class="inaug_1 event"><p>Inaugration</p></div>
          <router-link to="/events/Whiz-Quiz" tag="div" class="josh_1 event">
            <p>
              Whiz <br />
              Quiz
            </p>
          </router-link>
          <!-- <div class="josh_1 event">
            <p>
              Whiz <br />
              Quiz
            </p>
          </div> -->
          <router-link to="/events/Open Source Meetup" tag="div" class="osic_1 event">
            <p>Oslc Meetup</p>
          </router-link>
          <router-link to="/events/Codester" tag="div" class="codester_1 event">
            <p>Codester</p>
          </router-link>
          <router-link to="/events/Jigsaw Codemania" tag="div" class="jigsaw_1 event">
            <p>Jigsaw</p>
          </router-link>
          <router-link to="/events/Codexpress" tag="div" class="codexpress_1 event">
            <p>Codexpress</p>
          </router-link>

          <router-link to="/events/Gizmo Clench" tag="div" class="lrdline_1 event"><p>Gizmo Clench</p></router-link>
          <router-link to="/events/Code-Venture" tag="div" class="hackerman_1 event"><p>Code Venture</p></router-link>
          <router-link to="/events/Clash On LAN" tag="div" class="clashonlan_1 event">Clash On Lan</router-link>

          <router-link to="/events/Robo Liga" tag="div" class="roboliga_1 event"><p>Robo Liga</p></router-link>
          <router-link to="/events/Robo Wars" tag="div" class="robowars_1 event"><p>Robo Wars</p></router-link>
        </div>
      </div>

      <div class="day_2 wow bounceInLeft">
        <h1
          class="about-content"
          style=" font-weight: 400; font-size:4rem; margin-top:5vh; color: #dcf2f0;
      text-transform: uppercase;
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 1.5px;
      text-shadow: 0 0 20px #00b2ff;
      text-align: center;"
        >
          Day 2  (Oct 12)
        </h1>

        <div class="grid_container_2">
          <div class="item1_2 normal infox_cell">
            Info<span style="color:red;">X</span>
          </div>
          <div class="item2_2 normal time_cell">10:30-12</div>
          <div class="item3_2 normal time_cell">12-1</div>
          <div class="item4_2 normal time_cell">1-2</div>
          <div class="item5_2 normal time_cell">2-3</div>
          <div class="item6_2 normal time_cell">3-4</div>
          <div class="item7_2 normal time_cell">4-5</div>
          <div class="place1_2 normal place_cell">C-Audi</div>
          <!-- <div class="empty2"></div> -->
          <div class="place2_2 normal place_cell"><p>E-Labs</p></div>
          <div class="place3_2 normal place_cell"><p>D-Audi</p></div>
          <div class="place4_2 normal place_cell"><p>E-Audi</p></div>
          <div class="place5_2 normal place_cell">
            <p>Central <br />Arena</p>
          </div>
          <div class="place6_2 normal place_cell"><p>D-Labs</p></div>

          <!-- <div class="empty1_2"></div>
          <div class="empty2_2"></div>
          <div class="empty3_2"></div>
          <div class="empty4_2"></div>
          <div class="empty5_2"></div>
          <div class="empty6_2"></div>
          <div class="empty7_2"></div>
          <div class="empty8_2"></div>
          <div class="empty9_2"></div>
          <div class="empty10_2"></div>
          <div class="empty11_2"></div>
          <div class="empty12_2"></div>
          <div class="empty13_2"></div>
          <div class="empty14_2"></div>
          <div class="empty15_2"></div> -->
          <!-- <div class="empty16_2"></div>
            <div class="empty17_2"></div> -->
          <router-link to="/events/Marvel World" tag="div" class="marvel_world_2 event">
            <p>
              Marvel <br />
              World
            </p>
          </router-link>
          <router-link to="/events/Machine Learning Workshop" tag="div" class="ml_workshop_2 event">
            <p>
              ML <br />
              Workshop
            </p>
          </router-link>
          <router-link to="/events/Geek Diva" tag="div" class="infox_women_2 event">
            <p>
              Geek <br />
              Diva
            </p>
          </router-link>

          <div class="uh_2 event">
            <p>UHACK Starts</p>
          </div>
          <router-link to="/events/Space Jam" tag="div" class="spacejam_2 event">
            <p>Space Jam</p>
          </router-link>
          <router-link to="/events/Clash On LAN" tag="div" class="clashonlan_2 event">
            <p>
              Clash <br />
              On<br />Lan
            </p>
          </router-link>
          <router-link to="/events/Treasure Hunt" tag="div" class="treasurehunt_2 event">
            <p>Treasure <br />Hunt<br />Elimination</p>
          </router-link>
          <router-link to="/events/ProtoXperience" tag="div" class="protoxprience_2 event">
            <p>Protoxprience</p>
          </router-link>
        </div>
      </div>

      <div class="day_3 wow bounceInLeft">
        <h1
          class="about-content"
          style="font-weight: 400; font-size:4rem; margin-top:5vh;
          color: #dcf2f0;
      text-transform: uppercase;
      font-size: 2.5em;
      font-weight: bold;
      letter-spacing: 1.5px;
      text-shadow: 0 0 20px #00b2ff;
      text-align: center;"
   
        >
          Day 3 (Oct 13)
        </h1>

        <!-- </div> -->
        <div class="grid_container_3">
          <div class="item1_3 normal infox_cell">
            Info<span style="color:red;">X</span>
          </div>
          <div class="item2_3 normal time_cell">10:30-12</div>
          <div class="item3_3 normal time_cell">12-1</div>
          <div class="item4_3 normal time_cell">1-2</div>
          <div class="item5_3 normal time_cell">2-3</div>
          <div class="item6_3 normal time_cell">3-4</div>
          <div class="item7_3 normal time_cell">4-5</div>
          <div class="item8_3 normal time_cell">5+</div>
          <div class="place1_3 normal place_cell"><p>D-Audi</p></div>
          <div class="place2_3 normal place_cell"><p>E-Labs</p></div>
          <div class="place3_3 normal place_cell">
            <p>
              Electronics<br />
              Lab
            </p>
          </div>
          <div class="place4_3 normal place_cell"><p>E-Audi</p></div>
          <div class="place5_3 normal place_cell">
            <p>Central<br />Arena</p>
          </div>
          <div class="place6_3 normal place_cell"><p>D-Labs</p></div>

          <div class="place7_3 normal place_cell">
            <p>Central <br />Arena</p>
          </div>

          <div class="empty1_3"></div>
          <div class="empty2_3"></div>
          <div class="empty3_3"></div>
          <div class="empty4_3"></div>
          <div class="empty5_3"></div>
          <div class="empty6_3"></div>
          <div class="empty7_3"></div>
          <div class="empty8_3"></div>
          <div class="empty10_3"></div>
          <div class="empty11_3"></div>
          <div class="empty12_3"></div>
          <div class="val_3 event">
            <p>
              Validatory <br />
              Ceremony
            </p>
          </div>
          <router-link to="/events/Codewars" tag="div" class="codewar_3 event">
            <p>CodeWars</p>
          </router-link>
          <div class="uh_3 event">
            <p>U-Hack <br />Finishes</p>
          </div>
          <router-link to="/events/Clash of Companies" tag="div" class="coc_3 event"><p>Clash Of Companies</p></router-link>
          <router-link to="/events/Clash On LAN" tag="div" class="col_3 event"><p>Clash On Lan</p></router-link>
          <router-link to="/events/Lord Of The Line" tag="div" class="gizmo_3 event">
            <p>Lord of<br />Lines</p>
          </router-link>
          <router-link to="/events/Get Set Go" tag="div" class="getsetgo_3 event"><p>Get Set Go</p></router-link>
          <router-link to="/events/Meshed Up" tag="div" class="maze_3 event">
            <p>
              Meshed<br />
              Up
            </p>
          </router-link>
          <router-link to="/events/Bug Debug" tag="div" class="bug_3 event">
            <p>Bug<br />Debug</p>
          </router-link>
          <router-link to="/events/Data Quest" tag="div" class="data_3 event">
            <p>Data<br />Quest</p>
          </router-link>
          <router-link to="/events/Treasure Hunt" tag="div" class="hunt_3 event">
            <p>Treasure <br />Hunt<br />Finals</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <ul class="circles">
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

.context *{
  z-index: 1;
}

.overlay-section {
  color: white !important;
  filter: drop-shadow(0px 0px 10px rgba(253, 253, 253, 0.6));
  font-weight: 800;
  font-size: 7rem;
  text-align: center;
  letter-spacing: 2px;
  z-index: 0;
}

.contact-parent-wrapper {
  color: white;
  // text-transform: uppercase;
  // text-align: center;
  font-weight: 300 !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}
.subtitle-section {
  color: #f10b0b !important;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
}
.circles{
  z-index: 0;
  position: relative;
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
  width: 170px;
  height: 170px;
  animation-delay: 5s;
  animation-duration: 15s;
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
  width: 35px;
  height: 35px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
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
  left: 4%;
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
.grid_container_1 {
  text-transform: uppercase;
  font-weight: 300 !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
  background: #141414;
  width: 86vw;
}
.grid_container_2 {
  text-transform: uppercase;
  font-weight: 300 !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
  background: #141414;
  width: 86vw;
}
.grid_container_3 {
  text-transform: uppercase;
  font-weight: 300 !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
  background: #141414;
  width: 86vw;
}

.place_cell {
  background-image: linear-gradient(
    to right bottom,
    rgba(36, 35, 33, 0.85),
    rgba(68, 57, 51, 0.85)
  );
}
.time_cell {
  background-image: linear-gradient(
    to right bottom,
    rgba(36, 35, 33, 0.85),
    rgba(68, 57, 51, 0.85)
  );
}
.infox_cell {
  background-image: linear-gradient(
    to right bottom,
    rgba(90, 2, 2, 0.85),
    rgba(151, 53, 0, 0.85)
  );
}

.item1_1 {
  grid-area: infox_one;
}
.item2_1 {
  grid-area: t1_1;
}
.item3_1 {
  grid-area: t2_1;
}
.item4_1 {
  grid-area: t3_1;
}
.item5_1 {
  grid-area: t4_1;
}
.item6_1 {
  grid-area: t5_1;
}
.item7_1 {
  grid-area: t6_1;
}
.item8_1 {
  grid-area: t7_1;
}
.item9_1 {
  grid-area: t8_1;
}
.item10_1 {
  grid-area: t9_1;
}

.place1_1 {
  grid-area: p1_1;
}
.place2_1 {
  grid-area: p2_1;
}
.place3_1 {
  grid-area: p3_1;
}
.place4_1 {
  grid-area: p4_1;
}
.place5_1 {
  grid-area: p5_1;
}
.place6_1 {
  grid-area: p6_1;
}
.place7_1 {
  grid-area: p7_1;
}
.place8_1 {
  grid-area: p8_1;
}
.place9_1 {
  grid-area: p9_1;
}
.place10_1 {
  grid-area: p10_1;
}
.place11_1 {
  grid-area: p11_1;
}
.place12_1 {
  grid-area: p12_1;
}
.place13_1 {
  grid-area: p13_1;
}
.place14_1 {
  grid-area: p14_1;
}
.place15_1 {
  grid-area: p15_1;
}
.place16_1 {
  grid-area: p16_1;
}
/* .place17_1 {
  grid-area: p17_1;
} */
/* .empty {
  grid-area: e_1;
  background-color: #141414 !important;
} */
.empty1_1 {
  grid-area: e1_1;
}

.empty2_1 {
  grid-area: e2_1;
}

.empty3_1 {
  grid-area: e3_1;
}

.empty4_1 {
  grid-area: e4_1;
}

.empty5_1 {
  grid-area: e5_1;
}

.empty6_1 {
  grid-area: e6_1;
}

.empty7_1 {
  grid-area: e7_1;
}

.empty8_1 {
  grid-area: e8_1;
}

.empty9_1 {
  grid-area: e9_1;
}

.empty10_1 {
  grid-area: e10_1;
}

.empty11_1 {
  grid-area: e11_1;
}

.empty12_1 {
  grid-area: e12_1;
}

.empty13_1 {
  grid-area: e13_1;
}

.empty14_1 {
  grid-area: e14_1;
}

.empty15_1 {
  grid-area: e15_1;
}
 
.inaug_1 {
  grid-area: inaug_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 104, 224, 0.85),
    rgba(6, 58, 117, 0.85)
  );
}

.josh_1 {
  grid-area: josh_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 164, 224, 0.85),
    rgba(6, 100, 117, 0.85)
  );
}

.osic_1 {
  grid-area: osic_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 36, 12, 0.85),
    rgba(117, 14, 6, 0.85)
  );
}

.codester_1 {
  grid-area: codester_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 185, 0, 0.85),
    rgba(255, 119, 48, 0.85)
  );
}

.jigsaw_1 {
  grid-area: jigsaw_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
}

.lrdline_1 {
  grid-area: lrdline_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 220, 12, 0.85),
    rgba(117, 106, 6, 0.85)
  );
}

.codexpress_1 {
  grid-area: codexpress_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 220, 12, 0.918),
    rgba(47, 117, 6, 0.85)
  );
}

.hackerman_1 {
  grid-area: hackerman_1;
  background-image: linear-gradient(
    to right bottom,
    rgba(217, 12, 224, 0.85),
    rgba(104, 6, 117, 0.85)
  );
}

.clashonlan_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.85),
    rgba(40, 180, 133, 0.85)
  );
  grid-area: clashonlan_1;
}

/* .droid_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(19, 224, 12, 0.85),
    rgba(6, 117, 15, 0.85)
  );
  grid-area: droid_1;
} */

.roboliga_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 192, 12, 0.85),
    rgba(117, 91, 6, 0.85)
  );
  grid-area: roboliga_1;
}
.code_express {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
  grid-area: ce_2;
}

.robowars_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(19, 224, 12, 0.85),
    rgba(6, 117, 15, 0.85)
  );
  grid-area: robowars_1;
}
.meet2_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(76, 12, 224, 0.85),
    rgba(49, 6, 117, 0.85)
  );
  grid-area: meet2_1;
}

.ucntrl_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 139, 12, 0.85),
    rgba(117, 106, 6, 0.85)
  );
  grid-area: ucntrl_1;
}

.giz2_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
  grid-area: giz2_1;
}

.uh_inaug_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 143, 0.85),
    rgba(117, 6, 108, 0.85)
  );
  grid-area: uh_inaug_1;
}

.cube_1 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 139, 224, 0.85),
    rgba(6, 100, 117, 0.85)
  );
  grid-area: cube_1;
}
.normal {
  background-color: #141414 !important;
  text-align: center;
}

.grid_container_1 {
  display: grid !important;
  width: 85vw;

  font-size: 1.6vw !important;
  //  height: 90vh;
  grid-template-areas:
    "infox_one t1_1 t2_1 t3_1 t4_1 t5_1 t6_1 t7_1"
    "p1_1 inaug_1 inaug_1 josh_1 josh_1 josh_1 e4_1 e4_1"
    "p2_1 e5_1 e5_1 e5_1 e5_1 osic_1 osic_1 osic_1"
    "p3_1 e1_1 codester_1 codester_1 codester_1 jigsaw_1 codexpress_1 e2_1"
    "p4_1 e6_1 e6_1 e6_1 e6_1 hackerman_1 hackerman_1 hackerman_1"
    "p7_1 e4_4 e4_4 e4_4 e4_4 lrdline_1 lrdline_1 lrdline_1"
    "p5_1 clashonlan_1 clashonlan_1 clashonlan_1 clashonlan_1 clashonlan_1 clashonlan_1 clashonlan_1"
    "p6_1 e3_1 roboliga_1 roboliga_1 roboliga_1 robowars_1 robowars_1 robowars_1";
  // "p6_1 e1_1 e1_1 e3_1 e3_1 uhck_1 uhck_1 uhck_1 uhck_1 uhck_1 "
  // "p7_1 e1_1 e1_1 e3_1 e3_1 uhck_1 uhck_1 uhck_1 uhck_1 uhck_1 "
  // "p8_1 e1_1 e1_1 e3_1 e3_1 uhck_1 uhck_1 uhck_1 uhck_1 uhck_1 "
  // "p9_1 e1_1 e1_1 e3_1 e3_1 uhck_1 uhck_1 uhck_1 uhck_1 uhck_1  "
  // "p10_1 e1_1 e1_1 e4_1 giz_1 giz_1 lrdline_1 lrdline_1 lrdline_1 e8_1"
  // "p11_1 e1_1 e1_1 pubg_1 pubg_1 gam_1 gam_1 gam_1 gam_1 e8_1"
  // "p12_1 e1_1 e1_1 e5_1 potter_1 potter_1 potter_1 potter_1 potter_1 e8_1"
  // "p13_1 inaug_1 inaug_1 meet1_1 meet1_1 e9_1 meet2_1 meet2_1 meet2_1 e8_1"
  // "p14_1 e10_1 e10_1 e10_1 e10_1 ucntrl_1 ucntrl_1 ucntrl_1 ucntrl_1 ucntrl_1 "
  // "p15_1 e11_1 e11_1 giz2_1 e13_1 e13_1 e13_1 e13_1 e13_1 e13_1 "
  // "p16_1 e11_1 e11_1 e12_1 uh_inaug_1 e14_1 cube_1 cube_1 e15_1 e15_1";
  /* "p17_1 e_1 e_1 e_1 e_1 e_1 e_1 e_1 e_1 "
    "p17_1 e_1 e_1 e_1 e_1 e_1 e_1 e_1 e_1 "; */

  /* "menu main main main right right"
    "menu footer footer footer footer footer"; */
  grid-gap: 5px;
  /* background-color: #444; */
  padding: 2px;
  margin-top: -10vh;
  margin-bottom: 5vh;
  margin-right: auto;
  margin-left: auto;
  /* position: relative; */
  /* left: 5%; */
}

.grid_container_1 div {
  /* display: table-cell; */
  background-color: #141414 !important;
  text-align: center;
  /* padding: 10%; */
  /* vertical-align: middle; */
}
.grid_container_1 p {
  padding: 10% 0;
}

/* DAY 2 */
/* ========================== */
/* =========================== */
/* =========================== */
/* ======================== */
.item1_2 {
  grid-area: infox_two;
}
.item2_2 {
  grid-area: t1_2;
}
.item3_2 {
  grid-area: t2_2;
}
.item4_2 {
  grid-area: t3_2;
}
.item5_2 {
  grid-area: t4_2;
}
.item6_2 {
  grid-area: t5_2;
}
.item7_2 {
  grid-area: t6_2;
}
.item8_2 {
  grid-area: t7_2;
}
.item9_2 {
  grid-area: t8_2;
}

.place1_2 {
  grid-area: p1_2;
}
.place2_2 {
  grid-area: p2_2;
}
.place3_2 {
  grid-area: p3_2;
}
.place4_2 {
  grid-area: p4_2;
}
.place5_2 {
  grid-area: p5_2;
}
.place6_2 {
  grid-area: p6_2;
}
.place7_2 {
  grid-area: p7_2;
}
.place8_2 {
  grid-area: p8_2;
}
.place9_2 {
  grid-area: p9_2;
}
.place10_2 {
  grid-area: p10_2;
}

.empty2 {
  grid-area: e_2;
}
.empty1_2 {
  grid-area: e1_2;
}
.empty2_2 {
  grid-area: e2_2;
}
.empty3_2 {
  grid-area: e3_2;
}
.empty4_2 {
  grid-area: e4_2;
}
.empty5_2 {
  grid-area: e5_2;
}
.empty6_2 {
  grid-area: e6_2;
}
.empty7_2 {
  grid-area: e7_2;
}
.empty8_2 {
  grid-area: e8_2;
}
.empty9_2 {
  grid-area: e9_2;
}
.empty10_2 {
  grid-area: e10_2;
}
.empty11_2 {
  grid-area: e11_2;
}
.empty12_2 {
  grid-area: e12_2;
}
.empty13_2 {
  grid-area: e13_2;
}
.empty14_2 {
  grid-area: e14_2;
}
.empty15_2 {
  grid-area: e15_2;
}

.infox_women_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(217, 12, 224, 0.85),
    rgba(108, 6, 117, 0.85)
  );
  grid-area: infox_women_2;
}
.marvel_world_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(93, 12, 224, 0.85),
    rgba(63, 6, 117, 0.85)
  );
  grid-area: marvel_world_2;
}
.uh_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 150, 12, 0.85),
    rgba(117, 69, 6, 0.85)
  );
  grid-area: uh_2;
}
.ml_workshop_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(30, 224, 12, 0.85),
    rgba(6, 117, 15, 0.85)
  );
  grid-area: ml_workshop_2;
}
.spacejam_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(58, 12, 224, 0.85),
    rgba(49, 6, 117, 0.85)
  );
  grid-area: spacejam_2;
}
.clashonlan_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 192, 224, 0.85),
    rgba(6, 110, 117, 0.85)
  );
  grid-area: clashonlan_2;
}
.treasurehunt_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
  grid-area: treasurehunt_2;
}
.protoxprience_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 139, 12, 0.85),
    rgba(117, 87, 6, 0.85)
  );
  grid-area: protoxprience_2;
}
.meetup_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
  grid-area: meet_2;
}
.samadhan_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(26, 12, 224, 0.85),
    rgba(8, 6, 117, 0.85)
  );
  grid-area: sm_2;
}
.uhpc_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(220, 224, 12, 0.85),
    rgba(117, 100, 6, 0.85)
  );
  grid-area: uhpc_2;
}
.magicCube_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 139, 224, 0.85),
    rgba(6, 100, 117, 0.85)
  );
  grid-area: mc_2;
}
.robo_liga_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(19, 224, 12, 0.85),
    rgba(17, 6, 117, 0.85)
  );
  grid-area: rl_2;
}
.treasure_2 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 224, 118, 0.85),
    rgba(6, 117, 71, 0.85)
  );
  grid-area: th_2;
}

.grid_container_2 {
  display: grid !important;
  width: 86vw;
  font-size: 1.6vw !important;
  //  height: 100vh;
  grid-template-areas:
    "infox_two t1_2 t2_2 t3_2 t4_2 t5_2 t6_2"
    "p1_2 marvel_world_2 marvel_world_2 marvel_world_2 ml_workshop_2 ml_workshop_2 ml_workshop_2"
    "p2_2 infox_women_2 infox_women_2 infox_women_2 uh_2 uh_2 uh_2"
    "p3_2 spacejam_2 spacejam_2 spacejam_2 spacejam_2 spacejam_2 spacejam_2"
    "p4_2 clashonlan_2 clashonlan_2 clashonlan_2 clashonlan_2 clashonlan_2 clashonlan_2"
    "p5_2 e1_2 e1_2 e1_2 treasurehunt_2 treasurehunt_2 treasurehunt_2 "
    "p6_2 protoxprience_2 protoxprience_2 protoxprience_2 e2_2 e2_2 e2_2";

  /* "menu main main main right right"
      "menu footer footer footer footer footer"; */
  grid-gap: 5px;
  /* background-color: #444; */
  padding: 2px;
  margin-top: -10vh;
  margin-bottom: 5vh;
  margin-right: auto;
  margin-left: auto;
  /* position: relative;
  left: 5%; */
}

.grid_container_2 > div {
  background-color: #141414 !important;
  text-align: center;
}

.grid_container_2 p {
  padding: 3% 0;
  // padding-top: 2%;
}

/* ================================== */
/* ================================== */
/* ================================== */
/* ================================== */
/* DAY 3  */
/* ================================== */
/* ================================== */
/* ================================== */
/* ================================== */
.item1_3 {
  grid-area: infox_three;
}
.item2_3 {
  grid-area: t1_3;
}
.item3_3 {
  grid-area: t2_3;
}
.item4_3 {
  grid-area: t3_3;
}
.item5_3 {
  grid-area: t4_3;
}
.item6_3 {
  grid-area: t5_3;
}
.item7_3 {
  grid-area: t6_3;
}
.item8_3 {
  grid-area: t7_3;
}
.item9_3 {
  grid-area: t8_3;
}

.place1_3 {
  grid-area: p1_3;
}
.place2_3 {
  grid-area: p2_3;
}
.place3_3 {
  grid-area: p3_3;
}
.place4_3 {
  grid-area: p4_3;
}
.place5_3 {
  grid-area: p5_3;
}
.place6_3 {
  grid-area: p6_3;
}
.place7_3 {
  grid-area: p7_3;
}
.place8_3 {
  grid-area: p8_3;
}
.place9_3 {
  grid-area: p9_3;
}
.place10_3 {
  grid-area: p10_3;
}
.place11_3 {
  grid-area: p11_3;
}
.place12_3 {
  grid-area: p12_3;
}
.place13_3 {
  grid-area: p13_3;
}
.place14_3 {
  grid-area: p14_3;
}
.place15_3 {
  grid-area: p15_3;
}
.place16_3 {
  grid-area: p16_3;
}
.place17_3 {
  grid-area: p17_3;
}

.empty1_3 {
  grid-area: e1_3;
}

.empty2_3 {
  grid-area: e2_3;
}

.empty3_3 {
  grid-area: e3_3;
}

.empty4_3 {
  grid-area: e4_3;
}

.empty5_3 {
  grid-area: e5_3;
}

.empty6_3 {
  grid-area: e6_3;
}

.empty7_3 {
  grid-area: e7_3;
}

.empty8_3 {
  grid-area: e8_3;
}

/* .empty9_3 {
  grid-area: e9_3;
} */

.empty10_3 {
  grid-area: e10_3;
}

.empty11_3 {
  grid-area: e11_3;
}

.empty12_3 {
  grid-area: e12_3;
}

.coc_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
  grid-area: coc_3;
}

.codewar_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 97, 224, 0.85),
    rgba(6, 67, 117, 0.85)
  );
  grid-area: cw_3;
}

.val_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(19, 224, 12, 0.85),
    rgba(6, 117, 21, 0.85)
  );
  grid-area: val_3;
}

.uh_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 26, 224, 0.85),
    rgba(26, 6, 117, 0.85)
  );
  grid-area: uh_3;
}

.gizmo_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(125, 224, 12, 0.85),
    rgba(78, 117, 6, 0.85)
  );
  grid-area: gizmo_3;
}

.col_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
  grid-area: col_3;
}

.getsetgo_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 146, 224, 0.85),
    rgba(6, 13, 117, 0.85)
  );
  grid-area: get_3;
}

.maze_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(224, 12, 12, 0.85),
    rgba(117, 6, 6, 0.85)
  );
  grid-area: maze_3;
}

.bug_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(209, 16, 151, 0.85),
    rgba(117, 6, 99, 0.85)
  );
  grid-area: bug_3;
}

.data_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(164, 12, 224, 0.85),
    rgba(95, 6, 117, 0.85)
  );
  grid-area: data_3;
}

.hunt_3 {
  background-image: linear-gradient(
    to right bottom,
    rgba(12, 139, 224, 0.85),
    rgba(6, 100, 117, 0.85)
  );
  grid-area: hunt_3;
}

.grid_container_3 {
  display: grid !important;
  width: 90vw;
  font-size: 1.6vw !important;
  grid-template-areas:
    "infox_three t1_3 t2_3 t3_3 t4_3 t5_3 t6_3 t7_3"
    "p1_3  e1_3 coc_3 coc_3 coc_3 coc_3 coc_3 val_3"
    "p2_3  uh_3 uh_3 uh_3 cw_3 cw_3 cw_3 e2_3"
    "p3_3  e3_3 e3_3 e3_3 gizmo_3 gizmo_3 gizmo_3 e2_3"
    "p4_3  col_3 col_3 col_3 col_3 col_3 col_3 e2_3"
    "p5_3  get_3 get_3 get_3 maze_3 maze_3 maze_3 e2_3"
    "p6_3  bug_3 bug_3 e5_3 data_3 data_3 data_3 e2_3"
    "p7_3  hunt_3 hunt_3 e4_3 e4_3 e4_3 e4_3 e4_3";

  grid-gap: 5px;
  padding: 2px;
  margin-top: -10vh;
  margin-bottom: 5vh;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  left: 5%;
}
.grid_container_3 > div {
  background-color: #141414 !important;
  text-align: center;
}

.grid_container_3 p {
  padding: 5% 0;
}

.about-content {
  overflow: hidden;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  display: block !important;
  position: relative;
  text-align: center;
  padding: 10vh 0;
  /* flex-direction: column; */
  height: 100%;
  width: 100%;
  color: #a30404;
  /* animation: title-overlay 1s ease-in-out; */
  /* font-family: "Julius Sans One", sans-serif !important; */
  font-weight: 900;
}

@media screen and (max-width: 700px) {
  /* body {
    background-color: lightgreen;
  } */
  .about-content {
    font-size: 20px !important;
    margin-bottom: 3vh;
    /* margin-top: 6vh; */
  }
  .day_1 {
    margin: 0 auto;
  }
  .day_2 {
    margin: 10vh auto;
  }
  .day_3 {
    margin: 10vh auto;
  }
  .parent_div {
    top: 0vh;
  }
  .grid_container_1 {
    position: relative;
    top: 6vh;
    grid-gap: 2px;
    /* margin-top: 1%; */
  }
  .grid_container_2 {
    position: relative;
    top: 6vh;
    grid-gap: 2px;
    /* margin-top: 3vh; */
  }
  .grid_container_3 {
    position: relative;
    top: 6vh;
    grid-gap: 2px;
    /* margin-top: 3vh; */
  }
}
.event {
  transition: transform 200ms ease-out;
  cursor: pointer;
  border: 2px solid transparent; 
  
}
.event:hover {
  transform: scale(1.05);
  z-index: 10;
  border: 2px solid white;
  box-shadow: 0 0 20px black;
}
</style>
