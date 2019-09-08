<template>
  <div id="hero">
    <div id="logo">
      <!-- <img src="public/img/logo.svg" /> -->
      <svg
        id="gx-logo"
        class="tronFilter"
        data-name="gx-logo"
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
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2; filter: url(#glow);"
          points="482.6,238.3 657.6,390.9 400.5,617.7 608.7,391.9 482.6,308.7 "
        />
        <polygon
          class="st0"
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2; filter: url(#glow);"
          points="702.6,432 529,584.5 610.7,584.5 702.6,476 959.8,656.8 "
        />
        <polygon
          class="st0"
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2; filter: url(#glow);"
          points="996,175.8 748.6,391.9 922.6,544.4 922.6,474 794.5,390.9 "
        />
        <polygon
          class="st0"
          style="fill-opacity: 0; stroke-width: 2; stroke: #0abcf2; filter: url(#glow);"
          points="792.6,197.3 876.6,197.3 702.6,352.8 443.5,123.9 703.6,307.8 "
        />
      </svg>

      <div id="logo-text">Infoxpression</div>
      <div id="eventInfo">
        <div style="color:#b69ee2;font-weight: bold">OCT 15TH-17TH 2019</div>
        <div>TECHFEST USICT | GGSIPU</div>
        <div>CELEBRATING THE SENSE OF BELONGING</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#hero {
  height: 100vh;
  width: 100vw;
  background: #020518;
  z-index: 10;
}
#logo {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: slideUp 0.8s ease-in-out 3.3s;
  animation-fill-mode: forwards;
}
svg {
  max-width: 600px;
}
</style>
