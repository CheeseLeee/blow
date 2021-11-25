<template>
    <div id="rectangleBlock" :style="{transform:`rotate(${rotate}deg)`}">
        <square v-for="(item,index) in 4" :key="index" bgColor="white"></square>
    </div>
</template>

<script lang='ts'>
import Square from '../Square.vue'
export default {
  components: {
    Square

  },
  props:{
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
#rectangleBlock{
    width: 200px;
    display: flex;
}
</style>
