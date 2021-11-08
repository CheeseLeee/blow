<template>
    <div class="scroll-body" :style="{height:childsWidth + 'px'}">
        <div id="life">
            <div class="life-scroll-view" ref="childWidtgref" :style="{transform:`translateX(${scrollViweTranslateX}px)`}">
                <div class="c2">2222</div>
                <div class="c2">2222</div>
                <div class="c2">2222</div>
                <div class="c2">2222</div>
                <div class="trees">
                    <tree-item type="d" positionLeft="120"></tree-item>
                    <tree-item type="b" positionLeft="40"></tree-item>
                </div>
                <div class="cloud">
                    <cloud-item></cloud-item>
                </div>
                <div class="mountains">
                    <mountain-item positionLeft="200"></mountain-item>
                </div>
                <div class="ground"></div>
                <div class="grass"></div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import {onMounted,ref} from 'vue'
import TreeItem from '@/components/dream/TreeItem.vue'
import CloudItem from '@/components/dream/CloudItem.vue'
import MountainItem from '@/components/dream/MountainItem.vue'
export default {
  components: {
    TreeItem,
    CloudItem,
    MountainItem
  },
  setup(){
    let childWidtgref = ref()
    let childsWidth = ref()

    onMounted(() => {        
        let w = childWidtgref.value.clientWidth
        let winHeight = window.innerHeight
        console.log('wh',winHeight)

        childsWidth.value = w 
        console.log(childsWidth.value)
        window.addEventListener('scroll', handleScroll)
    })
    let scrollViweTranslateX = ref(0)
    
    function handleScroll(){
        let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollHeight)
        var h = window.innerWidth*4-window.innerHeight;
        var w = window.innerWidth*3;
        console.log(w/h)
        scrollViweTranslateX.value =  -scrollHeight * ( w / h )
        console.log()
    }

    return {
        scrollViweTranslateX,childWidtgref,childsWidth
    }
  }

}
</script>

<style scoped >
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
