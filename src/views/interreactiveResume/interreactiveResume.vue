<template>
    <div  class="scroll-body" >
        <div id="life">
            <div class="life-scroll-view" 
            ref="childWidtgref" 
            :style="{transform:`translateX(${scrollViweTranslateX}px)`,
            
            height:scrollViewHeight}">
                <div class="c2">
                    <gate positionLeft="1800" title="LEVEL1"></gate>
                    <my-table  ></my-table>
                </div>
                <div class="gates">
                    <gate positionLeft="7000" title="LEVEL2"></gate>
                </div>
                <img class="sun" src="../../assets/main/sun.png" />
                <div class="grounds">
                    <ground positionLeft=3700></ground>
                    <ground positionLeft=5200></ground>
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
                    <ribbon type="red" positionLeft="4300" positionTop="0" redText="sports fan"></ribbon>
                    <ribbon type="red" positionLeft="2555" positionTop="0" redText="I dream of liveing in USA"></ribbon>
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
                <div class="life-scroll-view-sea" :style="{height:seaTop}">
                    <div class="sea-ground"></div>
                    <algae></algae>
                    <sea-table title="Web Development" :skills="skills1" :itemsTittle="itemsTittle1"></sea-table>
                </div>
                <div class="view-sea-sky"></div>
                <div class="view-sea-two"></div>
                
            </div>

        </div>
    </div>
    <div id="animate" >
        <div class="animate-eyes" :style="{left:eyesLeft + 'px'}"></div>
    </div>
    <div class="position-x"></div>
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
import Algae from '@/components/interreactive/sea/Algae.vue'
import SeaTable from '@/components/interreactive/sea/SeaTable.vue'
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
    Algae,
    SeaTable,

  },
  setup(){
    const skills1 = [
        {pinkText:'JAVASCRIPT'},
        {pinkText:'HTML'},
        {pinkText:'CSS'},
        {pinkText:'VUE'}
    ]
    const itemsTittle1 = [
        {text:'BEGINNER',trues:[true,true,true,true],
        src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
        {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
        {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
        {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
        {text:'EXPERT',trues:[true,false,false,false],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},

    ]
    let {childWidtgref,childsWidth} = useComDreamCycle()
    let {eyesLeft,startScroll,scrollViweTranslateX,scrollViewHeight,seaTop} = useAnimateAndScroll()
    return {
        scrollViweTranslateX,childWidtgref,childsWidth,startScroll,eyesLeft,scrollViewHeight,seaTop,skills1,itemsTittle1
    }
  }

}
</script>   

<style scoped >
.transform-animate{
     transition: transform 1.5s;
}
.sea-ground{
    width: 7000px;
    height: 15px;
    background-image: url('../../assets/main/sea/sea-wave.png');
}
.view-sea-sky{
    height: 2500px;
    width: 7000px;
     position: absolute; 
    left: 7320px;
    top:-100vh;
    background-color: rgb(34, 177, 210);
}
.life-scroll-view-sea{
    width: 7000px
;
  
  height:calc( 100vh )

;
    position: fixed;
    left: 7320px

;
    bottom: 0px
;

    bottom: calc(-100vh + 120px);
    background-color: #0072bc;
    z-index: 20;
}
.view-sea-two{
    width: 7000px;
     height:120px;
     position: fixed;
     bottom: -100vh;
     left: 7320px;
        background-color: #0072bc;
}
.position-x{
    position: fixed;
    bottom: 120px;
    width: 20px;
    height: 20px;
    background-color: chartreuse;
}
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
    margin-left:-100px;
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
    width: 7320px;
    height: 30px;
        position: fixed;
    bottom: 90px;
    left: 0;
    background-image: url('../../assets/main/grass.png');
}
.ground{
    width: 7320px;
    height: calc(100vh + 90px);
    position: fixed;
    bottom: calc(-100vh);
    left: 0;
    background-image: url('../../assets/main/ground.png');
}
.scroll-body{
    height: 19000px;
}
.c2{
    flex:25%;
    height: 100vh;

}
.life-scroll-view{
    height: 100%;
    width: 7320px;
   
    background-color: rgb(34, 177, 210);
/*     position: relative; */
    transition: height .1s;
    transition-timing-function:ease-in;
}
#life .heightQueit{
        transition: height .1s;
    transition-timing-function:ease-in;
}
#life{
    position:fixed;
    top:0;
    height: 100vh;
    width: 100%;
    overflow: hidden;

}

</style>
