<template>
  <div id="mechaincl" :style="{top:positionTop + 'px' ,left:positionLeft + 'px'}">
      <div v-if="type === '1'" class="m1" >
        <div class="m1-body">
          <p class="m1-body-p">emotion</p>
        </div>
        <div class="m1-info">
          <p class="m1-info-p">love</p>
          <p class="m1-info-p-1">friend</p>
        </div>
        <div class="hand-left" v-for="(item,index) in handsImgLt" :key="index"  :class="[item.className]"  :style="{backgroundImage:`url(${item.src})`,opacity:item.opacity}">

        </div>  
        <div class="hand-right" v-for="(item,index) in handsImgRt" :key="index"  :class="[item.className]" :style="{backgroundImage:`url(${item.src})`,opacity:item.opacity}">

        </div>
      </div>

      <div v-if="type === '2' " v-moveAnimate="29000" class="m2">
        <div class="m2-body">
          <p class="m2-body-p">trip</p>
        </div> 
        <div class="m2-info">
          <p class="m2-info-p">eating</p>
          <p class="m2-info-p-1">watching</p>
        </div>
        <div class="m2-hand"></div> 
        <div class="m2-bottom"></div>     
      </div>

  </div>
</template>

<script lang='ts'>
import {reactive, ref,onBeforeUnmount} from 'vue'
export default {
  components: {

  },
    props:{
        type:{
            type:String,
        },
            positionTop:{
                type:String,
                default:'-40'
            },
        positionLeft:{
            type:String,
            default:'12000'
    },
    },
  setup() {
    let handsImgRt = reactive([
      {src:require('../../../assets/main/mechanical/robot-hand-a.png'),opacity:0,className:'robot-hand-a'},
       {src:require('../../../assets/main/mechanical/robot-hand-b.png'),opacity:0,className:'robot-hand-b'},
      {src:require('../../../assets/main/mechanical/robot-hand-c.png'),opacity:0,className:'robot-hand-c'},
      {src:require('../../../assets/main/mechanical/robot-hand-d.png'),opacity:1,className:'robot-hand-d '} 
    ])
        let handsImgLt = reactive([
      {src:require('../../../assets/main/mechanical/robot-hand-a.png'),opacity:0,className:'robot-hand-a-lt'},
       {src:require('../../../assets/main/mechanical/robot-hand-b.png'),opacity:0,className:'robot-hand-b-lt'},
      {src:require('../../../assets/main/mechanical/robot-hand-c.png'),opacity:1,className:'robot-hand-c-lt'},
      {src:require('../../../assets/main/mechanical/robot-hand-d.png'),opacity:0,className:'robot-hand-d-lt'} 
    ])

     let i = 0
     let timerStopI = 0
     const handTimer =  setInterval(() => {
       timerStopI++
        handsImgRt.forEach(item => {
          item.opacity = 0
        })
        handsImgRt[i].opacity = 1
                handsImgLt.forEach(item => {
          item.opacity = 0
        })
        handsImgLt[i].opacity = 1
        i++
        if(i === 3){
          i = 0
        }
        if(timerStopI === 450){
          clearInterval(handTimer)
        }
      },500)
      onBeforeUnmount(() => {
        clearInterval(handTimer)
      })
    return {handsImgRt,handsImgLt}
  }
}
</script>

<style scoped >
.m2-bottom{
  position: absolute;
  bottom: -122px;
  left: 4px;
  width: 400px;
  height: 121px;
  background-image: url('../../../assets/main/mechanical/alien-ship.png');
}
@keyframes rotate
{
    0% {transform:rotate(20deg)} 
    50% {transform:rotate(-15deg)} 
    100% {transform:rotate(20deg);}
}
.m2-hand{
  position: absolute;
  bottom: -110px;
    left: 90px;
  width: 220px;
  height: 170px;
   background-image: url('../../../assets/main/mechanical/alien-steer.png');
   animation-name:rotate;
    animation-duration: 1.5s;
    animation-timing-function:ease-out;
    animation-direction:reverse;
    animation-iteration-count:300;}
.m2-body-p{
  position: absolute; 
  top: 140px;
  left: 20px;

}
.m2-info-p{
  position: absolute;
  left: 200px;
  top: 120px;
}
.m2-info-p-1{
  position: absolute;
  top: 160px;
  left: 200px;
}
.m2{
  transition: transform 1.5s;
    color:white;
  font-weight: 500;
  font-family: sans-serif;
  font-size: 25px;
      position: relative;
    width: 400px;
    height: 515px;
    background-image: url('../../../assets/main/mechanical/alien-body.png');
}
.m2-body{
  top:138px;
  left: 52px;
  position: absolute;
  width: 300px;
  height: 300px;
  background-image: url('../../../assets/main/mechanical/piechart-back.png');
}
.m2-info{
   position: absolute;
   width: 300px;
   height: 300px;
    left: 13%;
  top: 27%;
   background-image: url('../../../assets/main/mechanical/piechart-front.png');
}
.hand-left {
  top: 90%;
    left: -12%;
  position: absolute;
  width: 160px;
  height: 120px;
  background-image: url('../../../assets/main/mechanical/robot-hand-a.png');
}
.hand-right{
    top: 90%;
    right: -12%;
  position: absolute;
  width: 160px;
  height: 120px;
  background-image: url('../../../assets/main/mechanical/robot-hand-a.png');
}
.robot-hand-a {
      width: 160px;
    height: 137px;
}
.robot-hand-b{
  width: 120px;
  height: 137px;
  right: -6%;
}
.robot-hand-c{
  width: 40px;
  height: 137px;
  right: 0;;
}
.robot-hand-d{
  width: 120px;
  height: 137px;
  right: -10%;
}

.m1-info-p-1{
     color:white;
  font-size: 23px;
  position: absolute;
  top: 30%;
  left: 70%; 
}
.m1-info-p {
   color:white;
  font-size: 23px;
  position: absolute;
  top: 60%;
  left: 70%; 
}
.m1-body-p{
  color:white;
  font-size: 23px;
  position: absolute;
  top: 43%;
  left: 20%;
}
.m1-info{
   position: absolute;
   width: 300px;
   height: 300px;
    left: 20%;
  top: 8%;
   background-image: url('../../../assets/main/mechanical/piechart-front.png');
}
.m1-body{
  position: absolute;
  width: 300px;
  height: 300px;
  left: 50%;
  top: 45%;
  transform: translate(-50% ,-50%);
  background-image: url('../../../assets/main/mechanical/piechart-back.png');
}
#mechaincl{
    position: absolute;
}
@-webkit-keyframes domMove {
      0% {transform: translateX(-200px);}
/*     25% {transform: translate(-200px,200px);}
    50% {transform: translate(200px,200px);} */
    100% {transform: translateX(0);}
}/* Safari and Chrome */
@keyframes ccc
{
    0% {transform: translateX(-200px);}
/*     25% {transform: translate(-200px,200px);}
    50% {transform: translate(200px,200px);} */
    100% {transform: translateX(0);}
}

.m1{
    animation:ccc;
    animation-iteration-count:99;
    position: relative;
    width: 500px;
    height: 400px;
    background-image: url('../../../assets/main/mechanical/robot-body.png');
}


.robot-hand-a-lt{
      width: 160px;
    height: 137px;
}
.robot-hand-b-lt{
  width: 120px;
  height: 137px;
  left: -9%;
}
.robot-hand-c-lt{
  width: 40px;
  height: 137px;
  left: 0;;
}
.robot-hand-d-lt{
  width: 120px;
  height: 137px;
  left: -10%;
}
</style>
