<template>
  <div id="p-shapblock">
      <div v-if="type==='1'" :style="{transform:`rotate(${rotate}deg)`}" class="p-shapblock-1">
          <square></square>
          <div class="square-line">
              <square></square>
              <square></square>
              <square></square>
          </div>
      </div>
      <div v-if="type==='2'" :style="{transform:`rotate(${rotate}deg)`}"  class="p-shapblock-1">        
          <div class="square-line">
              <square></square>
              <square></square>
              <square></square>
          </div>
          <square></square>
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
      type:String,
      require:true
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
.square-line{
    width: 50px;
}
.p-shapblock-1{
    width: 100px;
    display: flex;

}
#p-shapblock{

}
</style>
