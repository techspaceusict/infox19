<template>
    <div>
    <h1 class="text-center text-white">Events</h1>
    <CardDesign />
    <div class="eventsSection">
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
    </div>
    
    
    </div>
</template>

<script>
import events from '../assets/events/eventsData.json';
import CardDesign from '@/components/CardDesign'

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
            return require('../assets/events/imgs/' + img);
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
    .eventsSection{
        display: flex;
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

    }
   
}
.poster {
    width: 500px;
}
</style>