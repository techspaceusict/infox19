<template>
  <div ref="contact" id="contact">
    <Heading anchor=".ts-contact" wrapper="#contact" :speed="-3"
      >Contact Us</Heading
    >
    <div class="contactForm">
      <!-- <div class="row contact">
        <h4 style="text-align:center">We'd love to hear from you!</h4>
      </div> -->
      <div class="col-sm-12 col-md-5 ts-contact">
        <div>
          <div class="c1">Get in touch</div>
          <div class="c2">TECHSPACE</div>
          <div class="c3"><a href="tel:+91 96435 69434">+91 96435 69434</a></div>
          <div class="c4"><a href="mailto:infox@ipu.ac.in">infox@ipu.ac.in</a></div>
        </div>
      </div>

      <div class="formContainer">
        <div>
          <div class="styled-input wide">
            <input class="contact-name text-color" type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div class="emailPhone">
          <div>
            <div class="styled-input">
              <input class="contact-email" type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div>
            <div class="styled-input">
              <input class="contact-phone" type="text" required />
              <label>Phone</label>
            </div>
          </div>
        </div>
        <div>
          <div class="styled-input wide">
            <textarea class="contact-message" required></textarea>
            <label>Message</label>
          </div>
        </div>
        <button type="button"  v-on:click="recordMessage" class="btn btn-outline-primary btn-lg">
          <span class="submit">Leave Message</span>
          <!-- <span class="loading"><i class="fa fa-refresh"></i></span>
        <span class="check"><i class="fa fa-check"></i></span> -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
let backend='https://infoxpression.in/apis/backend';
export default {

  methods:{
    recordMessage:()=>{
      let email=document.querySelector(".contact-email").value,
          name=document.querySelector(".contact-name").value,
          mobile=document.querySelector(".contact-phone").value,
          message=document.querySelector(".contact-message").value;


      console.log(email.length,name.length,mobile.length,message.length); 
      if(!email.length || !name.length || !mobile.length || !message.length){
        alert("Please fill all the fields of the form");
        return;
      }

      axios.post(backend+'/contact',{email,name,mobile,message})
      .then(({data})=>{
        alert(data.message);
        document.querySelector(".contact-email").value="";
        document.querySelector(".contact-name").value="";
        document.querySelector(".contact-phone").value="";
        document.querySelector(".contact-message").value="";
      })
      .catch(err=>{
        console.log(err);
        alert("Your information is not saved, please report at infox@ipu.ac.in");
      })
        
    }
  }

};
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
$theme-color: #0575e6;

#contact{position: relative;z-index: 3;}
.contactForm {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.contactForm > div {
  width: 50%;
}

.emailPhone {
  display: flex;
  justify-content: space-between;
}

.emailPhone > div {
  width: 48%;
}

#contact {
  margin-top: -30em;
}
#contact * {
  z-index: 2;
}

// input:focus,textarea:focus{
//   border:2px solid $theme-color;
// }

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

.column {
  flex: 50%;
}

.ts-contact {
  display: block;
  position: relative;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}

.ts-contact a {
  text-decoration: none;
  color: white;
}

.ts-contact .c1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5em;
  position: relative;
  text-shadow: 0 0 10px #6200ff;
  color: #0018f3;
  top: -10px;
}

.ts-contact .c2 {
  font-size: 1.2em;
  font-weight: bold;
}

.formContainer {
  display: flex;
  flex-direction: column;
}

.ts-contact::after {
  content: "";
  background: url("../assets/TECHSPACE.png");
  background-repeat: no-repeat;
  background-position: center;
  //background-blend-mode: multiply;
  background-size: 75%;

  opacity: 0.2;
  top: -40px;
  left: 0px;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.background {
  width: 200px;
  height: 200px;
  display: block;
  position: relative;
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

@media screen and (max-width: 576px) {
  #contact {
    margin-top: -40em;
  }
  .ts-contact > div {
    > div {
      font-size: 0.7em;
    }
    .c2 {
      font-size: 0.9em;
    }
    .c1 {
      font-size: 1.2em;
    }
  }

  .ts-contact::after {
    top: -40px;
    height: 250px;
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
  width: 100%;
}

input,
textarea {
  padding: 25px;
  border: 0;
  width: 100%;
  font-size: 1rem;
  box-shadow: 2px 2px 20px #0576e66e;
  // background-color: #2d2d2d;
  background-color: #0c0c0cd7;
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
*,
*:before,
*:after {
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
  content: "";
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

@media screen and (max-width: 768px) {
  .contactForm {
    flex-direction: column;
    > div {
      width: 100%;
    }
    .ts-contact::after {
      transform: translateY(-80px);
      background-size: 70%;
      height: 400px;
    }
  }
}

@media screen and (max-width: 400px) {
  .emailPhone {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
  body .ts-contact::after {
    background-size: 100%;
  }

  .ts-contact::after {
    height: 400px;
  }
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
.column2 {
  // transform: translateX(150px);
  transform: translateY(-530px);
  // float: right;
}
.image {
  margin-left: 300px;
  height: 400px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 255, 0.8));
}
.reachUs {
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