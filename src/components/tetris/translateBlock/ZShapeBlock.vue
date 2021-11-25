<template>
    <div>
        <div v-if="type === '1' " class="z-shape-1" :style="{transform:`rotate(${rotate}deg)`}">
            <div class="z-shape-1-top">
                <square></square>
                <square></square>
            </div>
            <div class="z-shape-1-bottom">
                <square></square>
                <square></square>
            </div>
        </div> 
        <div  v-if="type === '2' " class="z-shape-1" :style="{transform:`rotate(${rotate}deg)`}">
            <div class="z-shape-2-top">
                <square></square>
                <square></square>
            </div>
            <div class="z-shape-2-bottom">
                <square></square>
                <square></square>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import Square from '../Square.vue'
export default {
  components: {
    Square

  },
  props:{
    type:{
        type:String
    },
    rotate:{
        type:String,
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >

.z-shape-1-bottom,.z-shape-2-top{
        position: absolute;
    left: 50px;
    top:50px;
    display: flex;
    width: 100px;
}
.z-shape-1-top,.z-shape-2-bottom{
    position: absolute;
    display: flex;
    width: 100px;
    left: 0;
    top:0;
}
.z-shape-2-top{
    left: 0;
}
.z-shape-2-bottom{
    left: 50px;
}
.z-shape-1{
    position: relative;
    width: 200px;
}
</style>
