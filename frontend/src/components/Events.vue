<template>
    <div id="events">
    <Heading anchor=".events" wrapper="#events" :speed="-2">Events</Heading>
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
            <div>

            </div>
        </div>
    </div>
    
    </div>
</template>

<script>
export default {
    
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
            
        }

    }
   
}
</style>