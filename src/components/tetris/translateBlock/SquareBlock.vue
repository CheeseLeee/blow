<template>
  <div id="squareblock" :style="{bottom:bottom + 'px',left:left + 'px',height:height + 'px'}">
      <template v-for="(item,index) in 4" :key="index">
        <square  v-if="index < 2"></square>
      </template>
  </div>
</template>

<script lang='ts'>
import Square from '../Square.vue'
export default {
  components: {
    Square

  },
  props:{
    bottom:{
      type:String
    },
    left:{
      type:String
    },
    height:{
      type:String
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
#squareblock{
    width: 100px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
}
</style>
