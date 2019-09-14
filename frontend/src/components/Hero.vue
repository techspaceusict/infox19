<template>
  <div ref="hero" id="hero">
    <!-- <canvas id="smoke"></canvas> -->

    <div id="logo">
      <!-- <img src="public/img/logo.svg" /> -->

      <svg
        id="gx-logo"
        class="tronFilter beating"
        data-name="gx-logo"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1366 700"
      >
        <g class="svgWrapper">
          <defs>
            <filter id="glow">
              <fegaussianblur
                class="blur"
                result="coloredBlur"
                stddeviation="4"
              ></fegaussianblur>
              <femerge>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="coloredBlur"></femergenode>
                <femergenode in="SourceGraphic"></femergenode>
              </femerge>
            </filter>
          </defs>
        </g>
        <g
          transform="translate(1.000000, 1.000000)"
          strF00="true"
          stroke-width="3"
        />
        <polygon
          class="st0"
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2;"
          points="482.6,238.3 657.6,390.9 400.5,617.7 608.7,391.9 482.6,308.7 "
        />
        <polygon
          class="st0"
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2;"
          points="702.6,432 529,584.5 610.7,584.5 702.6,476 959.8,656.8 "
        />
        <polygon
          class="st0"
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2;"
          points="996,175.8 748.6,391.9 922.6,544.4 922.6,474 794.5,390.9 "
        />
        <polygon
          class="st0"
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2;"
          points="792.6,197.3 876.6,197.3 702.6,352.8 443.5,123.9 703.6,307.8 "
        />
      </svg>

      <div id="logo-text"> 
        <span class="flicker-on">I</span>
        <span>n</span>
        <span>f</span>
        <span>o</span>
        <span>x</span>
        <span>p</span>
        <span>r</span>
        <span>e</span>
        <span>s</span>
        <span>s</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
      </div>
      <!-- <div id="eventInfo">
        <div class="date">OCT 11TH-13TH 2019</div>
        <div>TECHFEST USICT | GGSIPU</div>
        <div>CELEBRATING THE SENSE OF BELONGING</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let logoText = document.getElementById('logo-text').childNodes;
    let indices = [], i;
    for(i=0; i<logoText.length; i++) {
      indices.push(i);
    }
    indices = this.shuffle(indices);

    i = 0;
    const interval = setInterval(() => {
      if(i == 13) {
        clearInterval(interval);
      }
      logoText[indices[i]].classList.add('flicker-on');
      i++;
    }, 100);
    
    let hero = document.getElementById('hero');
    let logo = document.getElementById('gx-logo');
    let text = document.getElementById('logo-text');

    hero.addEventListener('mousemove', (event) => {
      let part = 20;
      let xLogo = (hero.clientWidth/2 - event.clientX)/(part*2);
      let yLogo = (hero.clientHeight/2 - event.clientY)/(part*2);
      let xText = (hero.clientWidth/2 - event.clientX)/part;
      let yText = (hero.clientHeight/2 - event.clientY)/part;
      logo.style.transform = `translate(${xLogo}px, ${yLogo}px)`;
      text.style.transform = `translate(${xText}px, ${yText}px)`;
    });
  },
  methods: {
    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }
};
</script>

<style>
@import "../assets/css/Hero.css";
</style>
