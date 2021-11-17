<template>
    <div  class="scroll-body" >
        <div id="life">
            <div class="life-scroll-view" 
            ref="childWidtgref" 
            :style="{transform:`translateX(${scrollViweTranslateX}px)`,            
            height:scrollViewHeight}">
                <div class="table">                  
                    <my-table  ></my-table>
                </div>
                <div class="gates">
                    <gate positionLeft="7000" title="LEVEL2"></gate>
                    <gate positionLeft="1800" title="LEVEL1"></gate>
                </div>
                <img class="sun" src="../../assets/main/ground/sun.png" />
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
                    <build positionLeft="4750"  type="c"></build>
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
                    <div class="deepWaters">
                        <deep-water type="1"></deep-water>
                    </div>
                    <div class="sea-ground"></div>

                    <div class="sea-tables">
                    <sea-table  :itemsY="itemsY1"  headtitle="Web Developoment" :itemsX="itemsX1"></sea-table>
                    <sea-table  eye_positionLeft="30" headtitle="Sports and Race" eye_positionTop="40" positionTop="-560" positionLeft="1550" :itemsY="itemsY2" :itemsX="itemsX2"></sea-table>
                    <sea-table  eye_positionLeft="3" headtitle="Owner info" eye_positionTop="27" positionTop="-1090" positionLeft="2750" :itemsY="itemsY3" :itemsX="itemsX3"></sea-table>
                  <!--   <sea-table title="Web Development" :itemsY="itemsY1" :itemsX="itemsX1"></sea-table> -->
                   </div>
                   <div  v-if="bulleIsShow">--><!--:positionLeft="item"-->
                        <bubble :class="[ccc ? 'bubbleMove' : '']" v-for="(item,index) in bubbles" :key="index" ></bubble>  
                   </div>
                </div>
                <div class="view-sea-sky"></div>
                <div class="view-sea-two">
                    <div class="sand-box">
                         <sand-box type="1" positionLeft="950"></sand-box>
                        <sand-box type="2" positionLeft="1950"></sand-box>
                    </div> 
                    <div class="algaes">
                        <algae type="1"></algae>
                        <algae type="2" positionLeft="1050"> </algae>
                        <algae type="1" positionLeft="3100"></algae>
                        <algae type="2" positionLeft="3200"></algae>
                    </div>

                </div>                
            </div>

        </div>
    </div>
    <div id="animate" >
        <div :class="[isOpen ? 'animate-eyes' : '']" :style="{left:eyesLeft + 'px'}"></div>
    </div>
    <div class="position-x"></div>
    <div v-if="!startScroll" class="welcome">welcome to here</div>

</template>

<script lang='ts'>
import {reactive,ref} from 'vue'
import {getRandomInt} from '../../utils/utils_fns/index'
import TreeItem from '@/components/interreactive/ground/TreeItem.vue'
import CloudItem from '@/components/interreactive/ground/CloudItem.vue'
import MountainItem from '@/components/interreactive/ground/MountainItem.vue'
import {useComDreamCycle,useAnimateAndScroll,eyesOpenOrClose} from './interreactiveResume'
import Gate from '@/components/interreactive/Gate.vue'
import MyTable from '@/components/interreactive/ground/MyTable.vue'
import Ground from '@/components/interreactive/ground/Ground.vue'
import Build from '@/components/interreactive/ground/Build.vue'
import Ribbon from '@/components/interreactive/Ribbon.vue'
import Fan from '@/components/interreactive/ground/Fan.vue'
import Algae from '@/components/interreactive/sea/Algae.vue'
import SeaTable from '@/components/interreactive/sea/SeaTable.vue'
import Bubble from '@/components/interreactive/sea/Bubble.vue'
import SandBox from '@/components/interreactive/sea/SandBox.vue'
import DeepWater from '@/components/interreactive/sea/DeepWater.vue'
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
    Bubble,
    SandBox,
    DeepWater
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(){
    let bulleIsShow = ref(true)
    let ccc = ref(true)
    let bubbles:any = reactive([])
    let int = getRandomInt(1,6)
    for(var i = 1 ; i < int ; i++){
        var left = getRandomInt(1,3300)
        bubbles.push(left)
    }
    setTimeout(() => {
        ccc.value = true
    },5000)
    
    const itemsY1 = [
        {pinkText:'JAVASCRIPT'},
        {pinkText:'HTML'},
        {pinkText:'CSS'},
        {pinkText:'VUE'}
    ]
    const itemsX1 = [
        {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},     
        {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
        {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
        {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
        {text:'EXPERT',trues:[true,false,false,false],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png')},
    ]
    const itemsY2 = [
        {pinkText:'GAME'},
        {pinkText:'FOOTBALL'},
        {pinkText:'PINGPONG'},
        {pinkText:'BADMINTON'},
    ]
    const itemsX2 = [
        {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png')},     
        {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png')},
        {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png')},
        {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png')},
        {text:'EXPERT',trues:[true,false,false,false],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png')},
    ]
    const itemsY3 = [
        {pinkText:'FACE'},
        {pinkText:'HEIGHT'},
        {pinkText:'WEIGHT'},
        {pinkText:'EMOTION'},
    ]
    const itemsX3 = [
        {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png')},     
        {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png')},
        {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png')},
        {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png')},
        {text:'EXPERT',trues:[true,false,false,false],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png')},
    ]
    let {childWidtgref,childsWidth} = useComDreamCycle()
    let {isOpen} = eyesOpenOrClose()
    let {eyesLeft,startScroll,scrollViweTranslateX,scrollViewHeight,seaTop} = useAnimateAndScroll()
    return {
        ccc,bulleIsShow,bubbles,scrollViweTranslateX,childWidtgref,childsWidth,startScroll,eyesLeft,scrollViewHeight,seaTop,itemsY1,itemsX1,isOpen,itemsY2,itemsX2,itemsY3,itemsX3
    }
  }

}
</script>   

<style scoped >
    .bubbleMove{
       top:22vh;
        transition:transform 3s ease-in;
    }
.sea-tables{
    width: 100%;
    height: 100px;
     display: flex;
     position: absolute;
     left: 50px;
     top:50%;
     transform: translateY(-50%);
}
.algaes,.deepWaters{
/*     display: flex;
    justify-content: space-around; */
    width: 100%;
   
  
    position: relative;
}
.sand-box{
    position: absolute;

    width: 100%;
    height: 100px;
  
}
.transform-animate{
     transition: transform 1.5s;
}
.sea-ground{
    width: 7000px;
    height: 15px;
    transform: translateY(-6px);
    background-repeat: repeat-x;
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
    background: url('../../assets/main/ground/robby-eyes-close.png') no-repeat;
    position: absolute;
    bottom: 140px;
    left: 90px;
    width: 55px;
    height: 25px;
        animation-name: opacity;
  animation-duration: .5s;
  animation-timing-function: ease-in;

}
#animate{
    width: 200px;
    height: 200px;
    position: fixed;
    bottom: 90px;
    left: 50%;
    margin-left:-100px;
    background-color: red;
    background:url('../../assets/main/ground/robby-slides.png') no-repeat;
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
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.grass{
    width: 7320px;
    height: 30px;
        position: fixed;
    bottom: 90px;
    left: 0;
    background-image: url('../../assets/main/ground/grass.png');
}
.ground{
    width: 7320px;
    height: calc(100vh + 90px);
    position: fixed;
    bottom: calc(-100vh);
    left: 0;
    background-image: url('../../assets/main/ground/ground.png');
}
.scroll-body{
    height: 23000px;
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
