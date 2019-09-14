<template>
  <div ref="contact" id="contact">
    <Heading anchor=".contact" wrapper="#contact" :speed="-3">Contact Us</Heading>
    <div class="row">
      <div class="row contact">
        <h4 style="text-align:center">We'd love to hear from you!</h4>
      </div>
      <div class="column">
      <form action="#">
        <div class="row input-container">
          <div class="col-xs-12">
            <div class="styled-input wide">
              <input type="text" required class="text-color" />
              <label>Name</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input" style="transform: translateX(-11px)">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div
              class="styled-input"
              style="float:right;transform: translateX(10px)"
            >
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <button type="button" class="btn btn-outline-primary btn-lg">
        	<span class="submit">Submit</span>
        	<!-- <span class="loading"><i class="fa fa-refresh"></i></span>
	        <span class="check"><i class="fa fa-check"></i></span> -->
          </button>
        </div>
      </form>
      </div>
      <div class="column2">
        <img src="../assets/eventImgs/TECHSPACE.png" class="image" alt="">
        <div class="reachUs">
           <div class="col-md-12">
            <p>For Any Queries : 8950723937</p>
          </div>
          <div class="col-md-12">
            <p>Mail Us : infox@ipu.ac.in</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
// const button = document.querySelector('.button');
// const submit = document.querySelector('.submit');

// function toggleClass() {
// 	this.classList.toggle('active');
// }

// function addClass() {
// 	this.classList.add('finished');
// }

// button.addEventListener('click', toggleClass);
// button.addEventListener('transitionend', toggleClass);
// button.addEventListener('transitionend', addClass);
</script>

<style lang="scss" scoped>

$theme-color:#0575e6;
#contact {
  margin-top: -40em;
  
}
#contact *{
  z-index: 2;
}

input:focus,textarea:focus{
  border:2px solid $theme-color;
}

h1 {
  font-family: "Poppins", sans-serif, "arial";
  font-weight: 600;
  font-size: 100px;
  color: White;
  text-align: center;
  padding-left: 290px;
}

h4 {
  font-family: "Roboto", sans-serif, "arial";
  font-weight: 400;
  font-size: 35px;
  color: #9b9b9b;
  line-height: 1.5;
  padding-left: 340px;
  padding-top: 30px;
}

.row {
  display: flex;
}

.column {
  flex: 50%
}

/* ///// inputs /////*/

input:focus ~ label,
textarea:focus ~ label,
input:valid ~ label,
textarea:valid ~ label {
  font-size: 0.75em;
  color: #999;
  top: -5px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.styled-input {
  z-index: 999;
  float: left;
  width: 308px;
  margin: 1rem 0;
  // margin-right: -2px;
  // margin-left: -5px;
  position: relative;
  border-radius: 4px;
}

@media only screen and (max-width: 470px) {
  .styled-input {
    width: 100%;
    // width: 450px;
    float: left;
  }
  .wide {
    width: 100%;
  }
}

.styled-input label {
  color: #999;
  padding: 1.3rem 30px 1rem 30px;
  position: absolute;
  top: 5px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
}

.styled-input.wide {
  width: 650px;
  max-width: 100%;
}

input,
textarea {
  padding: 25px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  box-shadow: 2px 2px 10px #0575e6;
  // background-color: #2d2d2d;
  background-color: #99999945;
  color: white;
  border-radius: 5px;
}

input:focus,
textarea:focus {
  outline: 0;
}

input:focus ~ span,
textarea:focus ~ span {
  width: 100%;
  -webkit-transition: all 0.075s ease;
  transition: all 0.075s ease;
}

textarea {
  width: 100%;
  min-height: 15em;
}

.input-container {
  width: 650px;
  max-width: 100%;
  margin: 20px auto 25px auto;
}
input[type="checkbox"] + label {
  color: #ccc;
  font-style: italic;
}

input[type="checkbox"]:checked + label {
  color: #f00;
  font-style: normal;
}
*, *:before, *:after {
  box-sizing: border-box;
  outline: none;
}
.button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12.5rem;
  margin: 0;
  padding: 1.5rem 3.125rem;
  background-color: #0575e6;
  border: none;
  border-radius: 0.3125rem;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: 300;
  text-transform: uppercase;
  overflow: hidden;
}
.button:before {
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #54d98c;
}
.button span {
  position: absolute;
  line-height: 0;
}
.button span i {
  transform-origin: center center;
}
.button span:nth-of-type(1) {
  top: 50%;
  transform: translateY(-50%);
}
.button span:nth-of-type(2) {
  top: 100%;
  transform: translateY(0%);
  font-size: 24px;
}
.button span:nth-of-type(3) {
  display: none;
}

.active {
  background-color: #2ecc71;
}
.active:before {
  width: 100%;
  transition: width 3s linear;
}
.active span:nth-of-type(1) {
  top: -100%;
  transform: translateY(-50%);
}
.active span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
}
.active span:nth-of-type(2) i {
  animation: loading 500ms linear infinite;
}
.active span:nth-of-type(3) {
  display: none;
}

.finished {
  background-color: #54d98c;
}
.finished .submit {
  display: none;
}
.finished .loading {
  display: none;
}
.finished .check {
  display: block !important;
  font-size: 24px;
  animation: scale 0.5s linear;
}
.finished .check i {
  transform-origin: center center;
}

@keyframes loading {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes scale {
  0% {
    transform: scale(10);
  }
  50% {
    transform: scale(0.2);
  }
  70% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
.column2{
  // transform: translateX(150px);
  transform: translateY(-530px);
  // float: right;
}
.image{
  margin-left: 300px;
  height: 400px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 255, 0.8));
}
.reachUs{
  // display: flex;
  color: white;
  margin-left: 300px;
  font-family: "Roboto", sans-serif, "arial";
  font-weight: 400;
  font-size: 20px;
  color: #9b9b9b;
  line-height: 1.5;
  text-align: center;
}
</style>