<template>
    <div class="context" >
    <Heading anchor=".images" wrapper="#about" :speed="-2">Events</Heading>
    
    <ul class="circles">
    <div id="events">
    
    
    <div class="eventsSection">
        <div class="d-flex" v-for="(event,i) in events" :key="i">
            <CardDesign :event="event" />
            <div class="eventName">{{ event.name.toUpperCase() }}</div>
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
import events from '../assets/events/eventsData.json';
import CardDesign from '@/components/CardDesign';
// import Heading from '@/../UI/Heading';

export default {
    components: {
        CardDesign
    },
    data(){
        return{
            events
        }
    },
    methods:{
        getImgUrl(img) {
            return require('../assets/events/posters/' + img);
        }
    }
}
</script>

<style lang="scss" scoped>

template{
    position: fixed;
    background-attachment: fixed;
}

.context {
    width: 100%;
    top:50vh;
    background-attachment: fixed;
    .title{
        padding-top:0;
    }

}

.area{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100vw;
    height:1000vh;
    position: fixed;
    background-attachment: fixed;
   
}




.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.16);;
    animation: animate 25s linear infinite;
    bottom: -150px;
    position: fixed;
    
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 60px;
    height: 60px;
    animation-delay: 4s;
     animation-duration: 15s;
}


.circles li:nth-child(2){
    left: 8%;
    width: 30px;
    height: 30px;
    animation-delay: 2s;
    animation-duration: 40s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 40px;
    height: 40px;
    animation-delay: 4s;
     animation-duration: 50s;
}

.circles li:nth-child(4){
    left: 5%;
    width: 60px;
    height: 60px;
    animation-delay: 2s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 90px;
    height: 90px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
     animation-duration: 10s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(11){
    left: 10%;
    width: 60px;
    height: 60px;
    animation-delay: 4s;
}
.circles li:nth-child(12){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 4s;
}
.circles li:nth-child(13){
    left: 25%;
    width: 90px;
    height: 90px;
   
}
.circles li:nth-child(14){
    left: 30%;
    width: 60px;
    height: 60px;
    animation-delay: 8s;
}
.circles li:nth-child(15){
    left: 35%;
    width: 100px;
    height: 100px;
    animation-duration: 11s;
}

.circles li:nth-child(16){
    left: 60%;
    width: 45px;
    height: 45px;
    animation-delay: 15s;
    animation-duration: 45s;
}
.circles li:nth-child(17){
    left: 50%;
    width: 45px;
    height: 45px;
    animation-delay: 5s;
    animation-duration: 15s;
}
.circles li:nth-child(18){
    left: 30%;
    width: 65px;
    height: 65px;
    animation-delay: 2s;
    animation-duration: 35s;
}
.circles li:nth-child(19){
    left: 60%;
    width: 40px;
    height: 40px;
    animation-delay: 15s;
    animation-duration: 25s;
}
.circles li:nth-child(20){
    left: 40%;
    width: 55px;
    height: 55px;
    animation-delay: 10s;
    animation-duration: 15s;
}


@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0.7;
        border-radius: 50%;
    }

}



// #events *{z-index: 2;}
#events{
    width:90%;
    margin-left: auto;
    margin-right: auto;
    
    .eventsSection *{z-index: 2}
    .eventsSection{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .eventNavs{
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: space-between;
            font-size: 30px;
            color:#2182ff;
            font-weight: bold;
            position:sticky;
            top:10px;
            align-content: center;
            
            >div{
                margin-top:20px;margin-bottom: 20px;
                transition: color 0.3s,text-shadow 0.3s,transform 0.3s;
            }
            >div:hover{
                color:rgba(255, 255, 255, 0.877);
                text-shadow: 0 0 20px  #2182ff;
                transform: scale(1.3);
                cursor: pointer;
            }
        }

        .eventPosters{
            color:white;
        }

        .d-flex{
            background: #272727a6;;
            width: 350px;
            height: 500px;
            margin: 30px;
            display: flex;
            flex-direction: column;
            position: relative;
            .eventName{
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
    }
   
}
.card-event {
    // margin: 20px;
}
</style>