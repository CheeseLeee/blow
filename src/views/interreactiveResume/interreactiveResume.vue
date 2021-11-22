<template>
    <div  class="scroll-body" >
        <div id="life">
            <div class="life-scroll-view" 
            ref="childWidtgref" 
            :style="{transform:`translate(${scrollViweTranslateX}px,${scrollViweTranslateY}px)`,            
            height:scrollViewHeight}">
                <div class="table">                  
                    <my-table  ></my-table>
                </div>
                <div class="gates">
                    <gate v-for="(item,index) in gatesConfig" :key="index" 
                    :positionLeft="item.positionLeft"
                    :title="item.title"
                    :positionBottom="item.positionBottom" >                   
                    </gate>
                </div>
                <img class="sun" src="../../assets/main/ground/sun.png" />
                <div class="grounds">
                    <ground positionLeft=3700></ground>
                    <ground positionLeft=5200></ground>
                </div>
                <div class="trees">
                    <tree-item v-for="(item,index) in treesConfig" :key="index" :type="item.type" :positionLeft="item.positionLeft"></tree-item>
                </div>
                <div class="ribbon">
                    <ribbon type="red" positionLeft="6305" positionTop="5%" redText="sports fan"></ribbon>
                    <ribbon type="red" positionLeft="4555" positionTop="5%" redText="I dream of liveing in USA"></ribbon>                   
                </div>
                <div class="builds">                    
                    <build v-for="(item,index) in buildsConfig" :key="index" :type="item.type" :positionLeft="item.positionLeft"></build>
                </div>
                <div class="cloud">
                    <cloud-item v-for="(item,index) in cloudsConfig" :key="index" :positionLeft="item.positionLeft" :positionTop="item.positionTop"></cloud-item>
                </div>
                <div class="mountains">
                    <mountain-item positionLeft="900"></mountain-item>
                    <mountain-item positionLeft="1800"></mountain-item>
                </div>
                <div class="fan">
                    <fan></fan>
                </div>
                <div class="ground"></div>
                <div class="grass"></div>
                <div class="life-scroll-view-sea" :style="{height:seaTop}">
                    <div class="deepWaters">
                        <deep-water v-for="(item,index) in deepwatersConfig" :key="index" :type="item.type" :positionLeft="item.positionLeft" :positionTop="item.posipositionToptionLeft"></deep-water>

                    </div>
                    <div class="sea-ground"></div>

                    <div class="sea-tables">
                        <sea-table v-for="(item,index) in seaTableItemConfig" :key="index" 
                        :data="item.data" 
                        :headtitle="item.headtitle"
                        :eye_positionLeft="item.eye_positionLeft"
                        :eye_positionTop="item.eye_positionTop"
                        :positionTop="item.positionTop"
                        :positionLeft="item.positionLeft" >                       
                        </sea-table>
                   </div>
                   <div  v-if="bubbleIsShow">
                        <bubble :class="[bubbleMoved ? 'bubbleMove' : '']" v-for="(item,index) in bubbles" :key="index" :positionLeft="item"></bubble>  
                   </div>
                </div>
                <div class="view-sea-sky"></div>
                 <div class="view-sea-sky-2"></div>
                <div class="view-sea-two">
                    <div class="sand-box">
                        <sand-box type="1" positionLeft="950"></sand-box>
                        <sand-box type="2" positionLeft="1950"></sand-box>
                    </div> 
                    <div class="algaes">
                        <algae v-for="(item,index) in algaesConfig" :key="index" :type="item.type" :positionLeft="item.positionLeft"></algae>
                    </div>
                </div>
                <div class="boxs">
                    <box v-for="(item,index) in boxsConfig" :key="index" :positionLeft="item.positionLeft" :type="item.type"></box>
                </div>
                <div class="blacks">
                    <black positionLeft="12500"></black>
                    <black positionLeft="14000" animatePosition="27750" textTop="老骥伏枥，志在千里" textBottom="烈士暮年，壮心不已"></black>
                </div>
                <div class="robots">
                   <mechaincl type="1" positionLeft="12800"></mechaincl>
                   <mechaincl type="2" positionLeft="14800" positionTop="-200"></mechaincl>
                </div>
                <div class="clis">
                    <cli positionLeft="13400"></cli>
                    <cli positionLeft="14600"></cli>
                </div>
                <img class="title-experience" src="../../assets/main/mechanical/title-experience.png" />
                <div  class="life-scroll-view-mechanicl"></div>
                <div class="floor"></div>                
                <div class="mechanical"></div>
                <div class="sky">
                    <div class="dock-floor"></div>
                    <div class="sea-water1"></div>
                    <div class="sea-body" ></div>
                    <water-full></water-full>
                    <balloon type='1' v-if="scrollViweTranslateY < 0 ||  scrollViweTranslateY == 0 "></balloon> 
                    <div>
                        <banner  
                        v-for="(item,index) in bannerConfig" :key="index" 
                        :type="item.type" 
                        :positionBottom="item.positionBottom"
                        :title="item.title"
                        :context="item.context">
                        </banner>
                        <cloud-item v-for="(item,index) in skycloudConfig" :key="index" :positionLeft="item.positionLeft" :positionTop="item.positionTop"> </cloud-item>
                        <sky-cloud></sky-cloud>
                        <sky-table></sky-table>
                    </div>
                </div>
                <div class="sky-bg"></div>
            </div>
        </div>
    </div>
    <div id="animate" v-show="!takeingBallon" :style="{bottom:screenBottom + 'px'}">
        <div  :class="[isOpen ? 'animate-eyes' : '']" :style="{left:eyesLeft + 'px'}"></div>
    </div>
    <balloon v-if="scrollViweTranslateY > 0" type="2" :positionLeft="skyLeft" :translateY="cloneBalloonMove"></balloon>
    <div class="animate-clone" v-show="takeingBallon" :style="{left:skyLeft}"></div>               
    <div class="position-x"></div>
    <div v-if="!startScroll" class="welcome">Scorll down mouse or up</div>

</template>

<script lang='ts'>

import TreeItem from '@/components/interreactive/ground/TreeItem.vue'
import CloudItem from '@/components/interreactive/ground/CloudItem.vue'
import MountainItem from '@/components/interreactive/ground/MountainItem.vue'
import {useComDreamCycle,useAnimateAndScroll,eyesOpenOrClose,useRandomBubble} from './interreactiveResume'
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
import {useConfig} from '@/components/comConfig/index'
import Box from '@/components/interreactive/mechaincl/Box.vue'
import Black from '@/components/interreactive/mechaincl/Black.vue'
import Cli from '@/components/interreactive/mechaincl/Cli.vue'
import Mechaincl from '@/components/interreactive/mechaincl/Mechaincl.vue'
import WaterFull from '@/components/interreactive/sky/WaterFull.vue'
import Balloon from '@/components/interreactive/sky/Balloon.vue'
import Banner from '@/components/interreactive/sky/Banner.vue'
import SkyCloud from '@/components/interreactive/sky/SkyCloud.vue'
import SkyTable from '@/components/interreactive/sky/SkyTable.vue'
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
    DeepWater,
    Box,
    Cli,
    Black,
    Mechaincl,
    WaterFull,
    Balloon,
    Banner,
    SkyCloud,
    SkyTable
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(){
    let {bannerConfig,seaTableItemConfig,gatesConfig,treesConfig,buildsConfig,cloudsConfig,deepwatersConfig,algaesConfig,boxsConfig,skycloudConfig} = useConfig()
    let {childWidtgref,childsWidth} = useComDreamCycle()
    let {isOpen} = eyesOpenOrClose()
    let {eyesLeft,cloneBalloonMove,startScroll,scrollViweTranslateX,scrollViewHeight,seaTop,takeingBallon,screenBottom,scrollViweTranslateY,skyLeft} = useAnimateAndScroll()
    let {bubbleIsShow,bubbleMoved,bubbles} = useRandomBubble()
    return {
        skycloudConfig,boxsConfig,algaesConfig,deepwatersConfig,cloudsConfig,buildsConfig,treesConfig,gatesConfig,seaTableItemConfig,bannerConfig,cloneBalloonMove,skyLeft,scrollViweTranslateY,screenBottom,bubbleIsShow,bubbleMoved,bubbles,scrollViweTranslateX,childWidtgref,childsWidth,startScroll,eyesLeft,scrollViewHeight,seaTop,isOpen,takeingBallon
    }
  }

}
</script>   

<style scoped >

.sea-body{
background-color: #0072bc;
    position: absolute;
    top:56px;
    left:0px;
    width: 3000px;
    height:100vh;
 
}
.sea-water1{
    position: absolute;
    top:50px;
    left:0px;
    width: 3000px;
    height: 6px;
    background-image: url('../../assets/main/sea/sea-wave.png');  
}
.dock-floor{
    position: absolute;
    top:0;
    left:0px;
    width: 3000px;
    height: 50px;
    background-image: url('../../assets/main/sky/dock-floor.png');
}
.sky{
    position: absolute; 
    left: calc(7320px + 4100px + 4500px);
    bottom: -4000px;
    width: 3000px;
    height: calc(4000px + 170px);
    
}
.title-experience{
    position: absolute;
    left: 11499px

;
    bottom: 20px;
}
.floor{
    position: fixed;
    left: calc(7320px + 4100px);
    bottom: 120px;
    width: 4500px;
    height: 50px;
   /*  background-color: green; */
   background-image: url('../../assets/main/mechanical/floor.png');
}
.mechanical{
    position: fixed;
    left: calc(7320px + 4100px);
    bottom: -3000px;
    width: 4500px;
    height: calc(3000px + 120px);
   /*  background-color: green; */
   background-image: url('../../assets/main/mechanical/panel.png');
}
    .bubbleMove{
       transform:translateY(-900px);
        transition:transform 3s ease-in;
    }
.sea-tables{
    width: 100%;
    height: 100px;
     display: flex;
     position: absolute;
     left: 500px;
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
    width: 4100px;
    height: 15px;
    transform: translateY(-6px);
    background-repeat: repeat-x;
    background-image: url('../../assets/main/sea/sea-wave.png');
}
.view-sea-sky{
    height: 4500px;
    width: 11000px;
     position: absolute; 
    left: 7320px;
    top:-100vh;
    background-color: rgb(34, 177, 210);
}
.view-sea-sky-2{
    height: 17500px;
    width: 11000px;
     position: absolute; 
    left: 7320px;
    top:calc(100vh - 7500px);
    background-color: rgb(34, 177, 210);
}
.life-scroll-view-sea{
    width: 4100px
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
/* .life-scroll-view-mechanicl{
    width: 4100px;
    height:calc( 100vh );
;
    position: fixed;
    left: 7320px

;
    bottom: 0px
;

    bottom: calc(-100vh + 120px);
    background-color: #0072bc;
    z-index: 20;
} */
.view-sea-two{
    width: 4100px;
     height:120px;
     position: fixed;
     bottom: -100vh;
     left: 7320px;
        background-color: #0072bc;
}
.position-x{
    position: fixed;
    display: none;
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
    z-index: 1000;
    bottom: 90px;
    left: 50%;
    margin-left:-100px;
    background-color: red;
    background:url('../../assets/main/ground/robby-slides.png') no-repeat;
    transition: transform .5s;
}
.animate-clone{
    
     width: 200px;
    height: 200px;
    position: fixed;
    z-index: 100;
    bottom: 150px;
    left: 50%;
    margin-left: -100px;
    background-color: red;
    background:url('../../assets/main/ground/robby-slides.png') no-repeat;
    transition: transform .5s;   
    transition: left 1s;
}
.sun{
    position: absolute;
    top:0;
    left: 5px;
}
.welcome{
    white-space: nowrap;
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
    height: calc(3000px + 90px);
    position: fixed;
    bottom: calc(-3000px);
    left: 0;
    background-image: url('../../assets/main/ground/ground.png');
}
.scroll-body{
    height: 57800px;
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
    height: -webkit-fill-available;

}

</style>
