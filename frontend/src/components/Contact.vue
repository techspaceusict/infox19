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
          <div class="col-xs-12">
            <div class="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </form>
      </div>
      <div class="column column1">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
}

.row {
  display: flex;
}

.column {
  flex: 50%
}

.column1{
  background: url("../assets/about-image1.jpg")
}

.background {
  width: 200px;
  height: 200px;
  display: block;
  position: relative;
}

div::after {
  content: "";
  background: url(image.jpg);
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
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

.submit-btn {
  float: right;
  padding: 7px 35px;
  border-radius: 60px;
  display: inline-block;
  background-color: #4b8cfb;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
}

.submit-btn:hover {
  transform: translateY(1px);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
}

@media (max-width: 768px) {
  .submit-btn {
    width: 100%;
    float: none;
    text-align: center;
  }
}

input[type="checkbox"] + label {
  color: #ccc;
  font-style: italic;
}

input[type="checkbox"]:checked + label {
  color: #f00;
  font-style: normal;
}
</style>