<template>
    <div id="events">
    <!-- <Heading anchor=".images" wrapper="#about" :speed="6">Events</Heading> -->

    <div class="eventsSection">
        <!-- <div class="eventNavs">
            <div>Programming</div>
            <div>Development</div>
            <div>Electronics</div>
            <div>Cyber Security</div>
            <div>ML/AI</div>
            <div>Hackathons</div>
            <div>Meetups</div>
            <div>Corporate</div>
            <div>Fun & Literary</div>
        </div> -->
        <div class="eventsPosters">
            <div v-on:click="fadeAway" class="singleEvent" v-for="(event, i) in events" :key="i" data-aos="fade-up">
                <div class="imageContainer"><img :src="getImgUrl(event.image)" class="poster"></div>
                <div class="contentDiv"></div>
                <div class="eventName">{{event.name}}</div>
            </div>
        </div>
    </div>
    
    
    </div>
</template>

<script>
import events from '../assets/events/eventsData.json';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default {
    created () {
        AOS.init({
            once:true,
            duration:700
        })
    },
    data(){
        return{
            events
        }
    }
    ,
    methods:{
        getImgUrl(img) {
            return require('../assets/events/imgs/' + img);
        },

        fadeAway(ev){
            let allevents=document.getElementsByClassName("singleEvent");
            for(let i=0; i<allevents.length; i++){
                if(allevents.item(i)!=ev.target.closest(".singleEvent")){
                    allevents[i].closest(".singleEvent").style.animation="fadeout 0.5s ease-out "+(0.5*(i+1))+"s 1 normal forwards";
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#events *{z-index: 2;}
#events{
    width:90%;
    margin-left: auto;                                                                  
    margin-right: auto;
    .title{padding-top:0}
    .eventsSection{
        // display: flex;
        // .eventNavs{
        //     display: flex;
        //     text-align: center;
        //     flex-direction: column;
        //     justify-content: space-between;
        //     font-size: 30px;
        //     color:#2182ff;
        //     font-weight: bold;
        //     position:sticky;
        //     top:10px;
        //     align-content: center;
        //     >div{
        //         margin-top:20px;margin-bottom: 20px;
        //         transition: color 0.3s,text-shadow 0.3s,transform 0.3s;
        //     }
        //     >div:hover{
        //         color:rgba(255, 255, 255, 0.877);
        //         text-shadow: 0 0 20px  #2182ff;
        //         transform: scale(1.3);
        //         cursor: pointer;
        //     }
        // }

        .eventsPosters{
            display:flex;
            color:white;
            flex-wrap: wrap;
            justify-content: space-around;
            .singleEvent{
                margin:30px;
                width:300px;
                height: auto;
                position: relative;
                cursor: pointer;
                opacity: 1;
                display: block;
            
                .contentDiv{
                    width:50px;height:50px;
                    //background: linear-gradient(to bottom,black 40%, rgb(31, 165, 255),);
                    margin-left:auto;
                    margin-right:auto;
                    transform:translateY(-10px);
                    position: relative;
                    z-index: -1;   
                    width:80%;                 
                }
                .imageContainer{
                    overflow: hidden;height:400px;
                    
                }
                img{width:100%;}
            }
            .eventName{
                text-align: center;
                font-size: 32px;
                margin-top: -20px;
                color:black;
                padding: 5px;
                letter-spacing: 1px;
                color:rgb(41, 141, 235);
                text-shadow: 0 0 4px rgb(41, 141, 235);
                font-weight: bold;
                //box-shadow: 5px 5px 15px rgb(36, 133, 245);
                background:black;
            }

            
            @keyframes fadeout{
                0%{opacity: 1;transform:translateY(0);}
                95%{opacity: 0;transform:translateY(-50px);}
                100%{display: none;}
            }
            
        }

    }
   
}
.poster {
    width: 500px;
}

</style>