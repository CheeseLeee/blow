<template>
  <div  v-if="type === 'red'" id="ribbon" :style="{top:computedTop ,left:positionLeft + 'px'}">
      <div class="ribbon">
          <img src="../../assets/main/ribbon-left.png"/>
          <div class="ribbon-mian">{{redText}}</div>
          <img src="../../assets/main/ribbon-right.png"/>
      </div>
  </div>
  <div v-if="type === 'yellow'">
    <div id="plan">
       <div class="plan">
          <img src="../../assets/main/plant-ribbon-left.png"/>
          <div class="plan-mian">{{yellowText}}</div>
          <img src="../../assets/main/plant-ribbon-right.png"/>
      </div>       
    </div>
</div>
  <div v-if="type === 'pink'">
    <div id="plan">
       <div class="plan">
          <img src="../../assets/main/sea/sea-ribbon-left.png"/>
          <div class="pink" >{{pinkText}}</div>
          <img src="../../assets/main/sea/sea-ribbon-right.png"/>
      </div>       
    </div>
</div>
</template>


<script lang='ts'>
import {computed} from 'vue'
export default {
  components: {

  },

  props:{
      type:{
          default:'red',
          type:String
      },
      positionTop:{
          type:String || Number
      },
      positionTopPercentage:{
          type:String
      },
      positionLeft:{
          type:String
      },
      redText:{
          default:'XXXXXXXXXXXXXXXXXXX',
          type:String,
      },
      yellowText:{
        default:'暂无',
          type:String,         
      },
        pinkText:{
            default:'暂无',
            type:String,         
        }
  },
  setup(props:any) {
     const computedTop = computed(() => {
        let top = props.positionTop
        console.log(typeof top)
        if(typeof top === 'number'){
            return top + 'px'
        }else{
            return top 
        }
        
      })
    return {computedTop}
  }
}
</script>

<style scoped >
.pink{
    background-color: #f26d7d;
        height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color:white
}
.plan-mian{
    background-color: #f7941d;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.ribbon,.plan{
   display: flex;
   align-content: center;
}
#ribbon{
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
     position: absolute;
     z-index: 200;
/*     left:50%;
    transform: translateX(-50%); */ 
}
.ribbon-mian{
    white-space: nowrap;
    height: 55px;
    line-height: 55px;
    background-color: #ed1c24;
    color:white;
    font-size: 32px;
    font-family: monospace;
    text-align: center;
}
</style>
