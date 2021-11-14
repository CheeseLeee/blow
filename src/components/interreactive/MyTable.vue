<template>
    <div class="plants-container">
        <ribbon redText="我的职业" positionLeft="250" positionTop="-25%"></ribbon>
        <div class="title-line">
          <div class="ribbonInfo-item" v-for="(item,index) in ribbonInfo" :key="index">
            <ribbon  :type="item.type" :yellowText="item.yellowText" ></ribbon>
          </div>            
        </div>
        <div class="title-row">
          <p v-for="(item,index) in tittleRow" :key="index">{{item}}</p>
        </div>
        <div class="imgs">          
          <img v-for="(item,index) in scores" :key="index" :src="item.src" :style="{transform:`translateY(${item.positionY}px)`}"/>
        </div>
        <div class="imgs-stalk">
          <div :style="{transform:`translateY(${-120}px)`}"></div><div :style="{transform:`translateY(${-15}px)`}"></div>
          <div :style="{transform:`translateY(${-70}px)`}"></div><div :style="{transform:`translateY(${-70}px)`}"></div>
        </div>
    </div>
</template>

<script lang='ts'>
import Ribbon from './Ribbon.vue'
export default {
  components: {
    Ribbon
  },
  props:{

  },
  setup() {
      const scores = [
        {
            src:require('../../assets/main/plant-head-leaves.png'),
            positionY:-225
        },
         {
            src:require('../../assets/main/plant-head-leaves.png'),
            positionY:-118
        },
         {
            src:require('../../assets/main/plant-head-leaves.png'),
            positionY:-172
        },
         {
            src:require('../../assets/main/plant-head-leaves.png'),
            positionY:-172
        },
    ]
    const tittleRow = ['S','A','B','C','D']
    const ribbonInfo = [{
        type:'yellow',
        yellowText:"Programer",
      },
      {
          type:'yellow',
          yellowText:"Math",
      },
      {
          type:'yellow',
          yellowText:"English",
      },
      {
          type:'yellow',
          yellowText:"Photoshop",
      }]
    return {
      ribbonInfo,tittleRow,scores
    }
  }
}
</script>

<style scoped >
.ribbonInfo-item{
  width: 25%;
  display: flex;
  justify-content: center;
}
.title-row{
  margin-top:40px;
}
.title-row p{
  font-family: frankfurter-medium-plain;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
  padding-bottom: 3px;
  border-bottom: solid 1px white;
  margin-bottom: 10px;
}
.imgs-stalk div{
  width: 6px;
  height: 400px;
  background-color: #a67c52;
}
.title-line, .imgs ,.imgs-stalk{

  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.imgs {
  position:absolute;
}
.plants-container{
    position: relative;
    left: 2600px;
    top:15%;
    width: 900px;
    height: 60%;
}
</style>
