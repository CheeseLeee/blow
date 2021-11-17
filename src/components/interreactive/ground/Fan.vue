<template>
  <div id="fan">
      <img class="fan-img" style="margin:0 20px" src="../../../assets/main/ground/t1.png" /> 
      <div class="fan-flex-box">
          <div v-for="(item,index) in t1" :key="index" class="animate"
          :style="{backgroundImage: 'url(' + item.src + ')' , transform:`translateY(${moveY}px)`}">
          {{item.name}}
          </div>
      </div>
      
      <div class="fan-flex-box">
          <div class="animate-quiet" 
          v-for="(item,index) in fan" :key="index" 
          :style="{backgroundImage: 'url(' + item.src + ')' , transform:`translateY(${moveY}px)`}">
          {{item.name}}</div>
      </div>

  </div>
</template>

<script lang='ts'>
import {onMounted,onBeforeUnmount,ref} from 'vue'
export default {
  components: {

  },
  setup() {
    let animateKey = true
    let moveY = ref(-1500)
    function handleScroll(){
        const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollHeight)
        if(scrollHeight > 10846 && animateKey){
            animateKey = false
            moveY.value = 0
            window.removeEventListener('scroll', handleScroll)
        }
    }
    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    const t1 = [{
        name:'T',
        src:require('../../../assets/main/ground/nba-board-red.png')
    },
    {
        name:'1',
        src:require('../../../assets/main/ground/nba-board-red.png')
    }
    ] 
    const fan = [
    {  name:'F',
        src:require('../../../assets/main/ground/nba-board-blue.png')
    },
    {
        name:'A',
        src:require('../../../assets/main/ground/nba-board-blue.png')
    },
    {
        name:'N',
        src:require('../../../assets/main/ground/nba-board-blue.png')     
    }
    ]
    return {t1,fan,moveY}
  }
}
</script>

<style scoped >
.fan-img{
width: 900px;


    height: 900px;


    transform: translateY(100px);


    position: relative;
    top: 200px;

;
    /* left: 0
px
; */
    opacity: 0.5;
}
.animate{
    transition: transform 2.5s;
}
.animate-quiet{
    transition: transform 1.5s;
}
.fan-flex-box div{
    font-size: 90px;
    font-weight: 600;
    color:white;
    text-align: center;
    line-height: 115px;
    margin: 0 10px;
    width: 110px;
    height: 140px;
}
.fan-flex-box{
    display: flex;
    justify-content: space-around;
}
#fan{
    position: absolute;
    left: 5840px;
    bottom: 115px;
    overflow: hidden;
}
</style>
