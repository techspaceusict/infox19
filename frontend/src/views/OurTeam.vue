<template>
<div class="context">
    <h1 style="align-content: center; text-align: center; color: white; font-size: 120px; margin-top: 20px;"> OUR TEAM</h1>
	        
        
        
        
        
        


        
        
	
 <div class="container">

	

	<div class="gallery">

		<div class="gallery-item">
			<div class="gallery-image" ><img src="../assets/ourTeam/vaidesh.jpeg" alt="" style="left: 60%;">
            <h2>Vaidesh Shankar</h2>
			<ul>
				<li><a href="https://github.com/Aakash2408"><i class="fab fa-github fa-2x"></i></a></li>
				<li><a href="https://www.instagram.com/theaakashsangwan/"><i class="fab fa-instagram fa-2x"></i></a></li>
				<li><a href="https://www.linkedin.com/in/aakash-sangwan-0790aa172/"><i class="fab fa-linkedin fa-2x"></i></a></li>
			
			</ul>
        </div></div>

		<div class="gallery-item">
			<div class="gallery-image"> <img src="../assets/ourTeam/dhruv.jpeg" alt="">
                 <h2>Dhruv Misra</h2>
			<ul>
				<li><a href="https://github.com/Aakash2408"><i class="fab fa-github fa-2x"></i></a></li>
				<li><a href="https://www.instagram.com/theaakashsangwan/"><i class="fab fa-instagram fa-2x"></i></a></li>
				<li><a href="https://www.linkedin.com/in/aakash-sangwan-0790aa172/"><i class="fab fa-linkedin fa-2x"></i></a></li>
			
			</ul>
            </div></div>
<!--         
        	<div class="gallery-item">
			<div class="gallery-image" ><img src="../assets/ourTeam/divyansh.jpg" alt="" style="left: 60%;">
            <h2>Divyansh Tripathi</h2>
			<ul>
				<li><a href="https://github.com/Aakash2408"><i class="fab fa-github fa-2x"></i></a></li>
				<li><a href="https://www.instagram.com/theaakashsangwan/"><i class="fab fa-instagram fa-2x"></i></a></li>
				<li><a href="https://www.linkedin.com/in/aakash-sangwan-0790aa172/"><i class="fab fa-linkedin fa-2x"></i></a></li>
			
			</ul>
        </div></div> -->
          <div class="break"></div>

		<div class="gallery-item">
			<div class="gallery-image"><img src="../assets/ourTeam/nipul.jpeg" alt="">
                 <h2>Nipul Singal</h2>
			<ul>
				<li><a href="https://github.com/NipulSingal"><i class="fab fa-github fa-2x" ></i></a></li>
				<li><a href="https://www.instagram.com/nipul_singal/"><i class="fab fa-instagram fa-2x" ></i></a></li>
				<li><a href="https://www.linkedin.com/in/nipul-singal-52579416a"><i class="fab fa-linkedin fa-2x"></i></a></li>
			
			</ul>
            </div></div>
        
        
        
        

		<div class="gallery-item">
			<div class="gallery-image"><img src="../assets/ourTeam/aakash.jpeg" alt="">
                 <h2>Aakash Sangwan</h2>
			<ul>
				<li><a href="https://github.com/Aakash2408"><i class="fab fa-github fa-2x"></i></a></li>
				<li><a href="https://www.instagram.com/theaakashsangwan/"><i class="fab fa-instagram fa-2x"></i></a></li>
				<li><a href="https://www.linkedin.com/in/aakash-sangwan-0790aa172/"><i class="fab fa-linkedin fa-2x"></i></a></li>
			
			</ul>
            </div></div>

		<div class="gallery-item">
			<div class="gallery-image"><img src="../assets/ourTeam/sumit.jpeg" alt="">
                 <h2>Sumit  Bhagat</h2>
			<ul>
				<li><a href="https://github.com/Aakash2408"><i class="fab fa-github fa-2x"></i></a></li>
				<li><a href="https://www.instagram.com/theaakashsangwan/"><i class="fab fa-instagram fa-2x"></i></a></li>
				<li><a href="https://www.linkedin.com/in/aakash-sangwan-0790aa172/"><i class="fab fa-linkedin fa-2x"></i></a></li>
			
			</ul>
            </div></div>

		

	</div>


</div>  <ul class="circles">
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
export default {
    data(){
        return{

        }
    },

    methods:{

    },

    mounted(){

    },

    destroyed(){

    },


}
</script>


<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat:500);

:root {
	/* Base font size */
	font-size: 10px;
}


body {
	min-height: 100vh;
	background-color: black;
}

// .container {
// 	max-width: 100rem;
// 	margin: 0 auto;
// 	padding: 0 2rem 2rem;
// }

.heading {
	font-family: "Montserrat", Arial, sans-serif;
	font-size: 4rem;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	padding: 3.5rem 0;
	color: #1a1a1a;
}

.heading span {
	display: block;
}

.gallery {
	display: flex;
	flex-wrap: wrap;
    // flex-direction: row;
	/* Compensate for excess margin on outer gallery flex items */
	margin: -1rem .25rem;
}

.gallery-item {
	/* Minimum width of 24rem and grow to fit available space */
	flex: 1 0 24rem;
	/* Margin value should be half of grid-gap value as margins on flex items don't collapse */
	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
}

.gallery-item2 {
	/* Minimum width of 24rem and grow to fit available space */
	flex: 5px 0 24rem;
	/* Margin value should be half of grid-gap value as margins on flex items don't collapse */
	margin: 1rem;
	box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
	overflow: hidden;
}


/*

The following rule will only run if your browser supports CSS grid.

Remove or comment-out the code block below to see how the browser will fall-back to flexbox styling. 

*/

// @supports (display: grid) {
// 	.gallery {
// 		display: grid;
// 		grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
// 		grid-gap: 2rem;
// 	}

// 	.gallery,
// 	.gallery-item {
// 		margin: 0;
// 	}
// }

.gallery-image
{display: flex;
	width: 300px;
	height: 400px;
	position: relative;
	overflow: hidden;
    border :10px solid cornflowerblue ;
    // border-right:10px solid white;
    
    
}

.gallery-image:before
{
    
	content: '';
	position: absolute;
	top: 0;
	left: 180%;
	height: 100%;
	width: 100%;
	background: rgba(255,255,255,.3);
	z-index: 1;
	transform: skew(45deg);
	transition: .5s;
}

.gallery-image:hover:before
{
	left: -180%;
}

.gallery-image img
{
	height: 400px;
	width: 300px;
	filter: grayscale(0%);
	transition: 1.2s;
}
.gallery-image:hover img
{
	filter: grayscale(100%);
	transform: scale(1.1);
    border-radius: 25px;
}

.gallery-image h2
{
	background: black;
	font-family: Poppins;
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	margin: 0;
	padding: 10px 0;
    font-size: 30px;
	position: absolute;
	bottom: 0;
	width: 100%;
	transform: perspective(100px) rotateY() ;
  opacity:0.8;
	transform-origin: left;
	transition: 1s;
    margin-right: 15px;
}

.gallery-image:hover h2
{
	transform: perspective(100px) rotateY(0deg);
  opacity:1;
    
}

.gallery-image ul
{
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	list-style: none;
	background: transparent;
}

.gallery-image ul li
{
	background: #333;
	height: 50px;
	width: 50px;
	text-align: center;
	line-height: 40px;
	transform: perspective(800px) rotateY(90deg);
	transition: .5s;
	transform-origin: left;
  
}

.gallery-image:hover ul li
{
	transform: perspective(800px) rotateY(0deg);
}

.gallery-image:hover ul li:nth-child(1)
{
	transition-delay: .2s;
}

.gallery-image:hover ul li:nth-child(2)
{
	transition-delay: .6s;
}

.gallery-image:hover ul li:nth-child(3)
{
	transition-delay: .8s;
}

.gallery-image:hover ul li:nth-child(4)
{
	transition-delay: 1s;
}

.gallery-image ul li a
{
	color: #6dd5ed;
	background: rgba(255,255,255,0);
    height: 70px;
    width: 70px;
  
    
}

 .gallery-image ul li i
{
	color:#6dd5ed;
	background: rgba(255,255,255,0);
    
}

.gallery-image ul li i:hover
{
	color: #fff;
	background: rgba(255,255,255,0);
}






.break {
  flex-basis: 100%;
  height: 0;
}


















/*.image-area2
{
	top: 40%;
	left: 60%;
	transform: translate(-50%, -50%);
	position: absolute;
}

.image-area3
{
	top: 90%;
	left: 30%;
	transform: translate(-50%, -50%);
	position: absolute;
}
.image-area4
{
	top: 90%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: absolute;
}
.image-area5
{
	top: 90%;
	left: 70%;
	transform: translate(-50%, -50%);
	position: absolute;
}

*/






.circles{
  z-index: -999;
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



</style>