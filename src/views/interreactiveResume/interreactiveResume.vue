<template>
    <div  class="scroll-body" >
        <div id="life">
            <div class="life-scroll-view" ref="childWidtgref" :style="{transform:`translateX(${scrollViweTranslateX}px)`}">
                <div class="c2">
                    <gate positionLeft="1800" title="LEVEL1"></gate>
                    <my-table  ></my-table>
                </div>

                <img class="sun" src="../../assets/main/sun.png" />
                <div class="grounds">
                    <ground positionLeft=3700></ground>
                </div>
                <div class="trees">
                    <tree-item type="d" positionLeft="120"></tree-item>
                    <tree-item type="b" positionLeft="40"></tree-item>
                    <tree-item type="c" positionLeft="750"></tree-item>
                    <tree-item type="e" positionLeft="900"></tree-item>
                    <tree-item type="d" positionLeft="2350"></tree-item>
                    <tree-item type="b" positionLeft="2200"></tree-item>
                    <tree-item type="a" positionLeft="2300"></tree-item>
                </div>
                <div class="ribbon">
                    <ribbon type="red" positionLeft="4050" positionTop="0" redText="sports fan"></ribbon>
                    <ribbon type="red" positionLeft="2555" positionTop="0" redText="my dream of liveing in USA"></ribbon>
                </div>
                <div class="builds">                    
                    <build positionLeft="4100" type="a"></build>
                    <build positionLeft="4400"  type="b"></build>
                    <build  positionLeft="4750"  type="c"></build>
                </div>
                <div class="cloud">
                    <cloud-item positionLeft="200" positionTop="40"></cloud-item>
                    <cloud-item positionLeft="750" positionTop="100"> </cloud-item>
                </div>
                <div class="mountains">
                    <mountain-item positionLeft="900"></mountain-item>
                </div>
                <div class="fan">
                    <fan></fan>
                </div>
                <div class="ground"></div>
                <div class="grass"></div>
            </div>
        </div>
    </div>
    <div id="animate" >
        <div class="animate-eyes" :style="{left:eyesLeft + 'px'}"></div>
    </div>
    <div v-if="!startScroll" class="welcome">welcome to here</div>

</template>

<script lang='ts'>
import TreeItem from '@/components/interreactive/TreeItem.vue'
import CloudItem from '@/components/interreactive/CloudItem.vue'
import MountainItem from '@/components/interreactive/MountainItem.vue'
import {useComDreamCycle,useAnimateAndScroll} from './interreactiveResume'
import Gate from '@/components/interreactive/Gate.vue'
import MyTable from '@/components/interreactive/MyTable.vue'
import Ground from '@/components/interreactive/Ground.vue'
import Build from '@/components/interreactive/Build.vue'
import Ribbon from '@/components/interreactive/Ribbon.vue'
import Fan from '@/components/interreactive/Fan.vue'
export default {
  components: {
    TreeItem,
    CloudItem,
    MountainItem,
    Gate,
    MyTable,
    Ground,
    Build,
    Ribbon,
    Fan,

  },
  setup(){
    let {childWidtgref,childsWidth} = useComDreamCycle()
    let {eyesLeft,startScroll,scrollViweTranslateX} = useAnimateAndScroll()
    return {
        scrollViweTranslateX,childWidtgref,childsWidth,startScroll,eyesLeft,
    }
  }

}
</script>   

<style scoped >
.animate-eyes{
    background: url('../../assets/main/robby-eyes-close.png') no-repeat;
    position: absolute;
    bottom: 140px;
    left: 90px;
    width: 55px;
    height: 25px;
        animation-name: opacity;
  animation-duration: .5s;
  animation-timing-function: ease-in;
animation-delay: 5s /* Opera */;
    animation-iteration-count: infinite;
    animation-direction:alternate;
}
#animate{
    width: 200px;
    height: 200px;
    position: fixed;
    bottom: 90px;
    left: 0px;
    background-color: red;
    background:url('../../assets/main/robby-slides.png') no-repeat;
    transition: transform .5s;
}
.sun{
    position: absolute;
    top:0;
    left: 5px;
}
.welcome{
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-family: frankfurter-medium-plain;
    font-size: 30px;
    z-index: 99;
    color:white;
      animation-name: opacity;
  animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction:alternate;
}
@keyframes opacity {
  from {opacity: 0;}
  to {opacity: 1;}
}
.grass{
    width: 100%;
    height: 30px;
        position: fixed;
    bottom: 90px;
    left: 0;
    background-image: url('../../assets/main/grass.png');
}
.ground{
    width: 100%;
    height: 90px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-image: url('../../assets/main/ground.png');
}
.scroll-body{
    height: 16000px;
}
.c2{
    flex:25%;
    height: 100vh;

}
.life-scroll-view{
    height: 100%;
    width: 8000px;
    display: flex;
    background-color: rgb(34, 177, 210);
    position: relative;
}
#life{
    position:fixed;
    top:0;
    height: 100vh;
    width: 100%;
    overflow: hidden;

}

</style>
