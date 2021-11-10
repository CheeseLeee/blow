<template>
    <div  class="scroll-body" :style="{height:childsWidth + 'px'}">
        <div id="life">
            <div class="life-scroll-view" ref="childWidtgref" :style="{transform:`translateX(${scrollViweTranslateX}px)`}">
                <div class="c2">
                    <gate positionLeft="1800" title="LEVEL1"></gate>
                    <my-table :ribbonInfo="ribbonInfo" :tittleRow="tittleRow" :scores="scores" redText="我的职业"></my-table>
                </div>
                <div class="c2">2222</div>
                <div class="c2">2222</div>
                <div class="c2">2222</div>
                <img class="sun" src="../../assets/main/sun.png" />
                <div class="trees">
                    <tree-item type="d" positionLeft="120"></tree-item>
                    <tree-item type="b" positionLeft="40"></tree-item>
                    <tree-item type="c" positionLeft="750"></tree-item>
                    <tree-item type="e" positionLeft="900"></tree-item>
                    <tree-item type="d" positionLeft="2350"></tree-item>
                    <tree-item type="b" positionLeft="2200"></tree-item>
                    <tree-item type="a" positionLeft="2300"></tree-item>
                </div>
                <div class="cloud">
                    <cloud-item positionLeft="200" positionTop="40"></cloud-item>
                    <cloud-item positionLeft="750" positionTop="100"> </cloud-item>
                </div>
                <div class="mountains">
                    <mountain-item positionLeft="900"></mountain-item>
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
import TreeItem from '@/components/dream/TreeItem.vue'
import CloudItem from '@/components/dream/CloudItem.vue'
import MountainItem from '@/components/dream/MountainItem.vue'
import {useComDreamCycle,useAnimateAndScroll} from './interreactiveResume'
import Gate from '@/components/dream/Gate.vue'
import MyTable from '@/components/dream/MyTable.vue'

export default {
  components: {
    TreeItem,
    CloudItem,
    MountainItem,
    Gate,
    MyTable,

  },
  setup(){
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
    let {childWidtgref,childsWidth} = useComDreamCycle()
    let {eyesLeft,startScroll,scrollViweTranslateX} = useAnimateAndScroll()
    return {
        scrollViweTranslateX,childWidtgref,childsWidth,startScroll,eyesLeft,tittleRow,ribbonInfo,scores,
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
    left: 50%;
    transform: translateX(-50%);
    background-color: red;
    background:url('../../assets/main/robby-slides.png') no-repeat
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
    height: 2000px;
}
.c2{
    flex:25%;
    height: 100vh;

}
.life-scroll-view{
    height: 100%;
    width: 400%;
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
