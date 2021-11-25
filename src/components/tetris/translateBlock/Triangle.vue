<template>
  <div id="triangle">
      <div class="triangle" :style="{transform:`rotate(${rotate}deg)`}">
          <square bgColor="pink"></square>
          <div class="squares-row">
              <square v-for="(item,index) in 3" :key="index" bgColor="pink"></square>
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

.squares-row{
    display: flex;
}
.triangle{
    width: 150px;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
}
#triangle{
    
}
</style>
