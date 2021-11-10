<template>
    <div class="plants-container">
        <ribbon :redText="redText"></ribbon>
        <div class="title-line">
          <div class="ribbonInfo-item" v-for="(item,index) in ribbonInfo" :key="index">
            <ribbon  :type="item.type" :yellowText="item.yellowText"></ribbon>
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
    redText:{
      type:String
    },
    tittleRow:{
      type:Array,
    },
    ribbonInfo:{
      type:Array,
    },
    scores:{
      type:Array
 /*        validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].includes(value) 
      }*/
    }
  },
  setup() {
    return {}
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
  position: absolute;

  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.plants-container{
    position: relative;
    left: 2600px;
    top:5%;
    width: 900px;
    height: 60%;
}
</style>
