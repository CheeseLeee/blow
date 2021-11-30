<template>
  <div class="game">
      <div class="game-board">  <!--12 * 12 50px -->      
        <square-block bottom="0" left="0"></square-block>
        <square-block bottom="0" left="100"></square-block>
        <square-block bottom="0" left="200"></square-block>
        <square-block bottom="0" left="300"></square-block>
        <square-block bottom="0" left="400"></square-block>
        <square-block bottom="0" left="500"></square-block>
        <square-block bottom="100" left="500"></square-block>
        <square-block bottom="200" left="500"></square-block>
        <square-block bottom="300" left="500"></square-block>
        <square-block bottom="400" left="500"></square-block>
        <square-block bottom="500" left="500"></square-block>

      </div>
      
  </div>
</template>

<script lang='ts'>
//import Square from '@/components/tetris/Square.vue'
import RectangleBlock from '@/components/tetris/translateBlock/rectangleBlock.vue'
import SquareBlock from '@/components/tetris/translateBlock/SquareBlock.vue'
import Triangle from '@/components/tetris/translateBlock/Triangle.vue'
import ZShapeBlock from '@/components/tetris/translateBlock/ZShapeBlock.vue'
import PShapeBlock from '@/components/tetris/translateBlock/PShapeBlock.vue'
import {defineComponent} from 'vue'
export default defineComponent({
  components: {
    //Square,
    SquareBlock,
/*     RectangleBlock,
    Triangle, 
    ZShapeBlock,
    PShapeBlock */

  },
  setup() {

    console.log('dev--main')


    return {}
  }
})
</script>

<style scoped >
.flex-box{
  display: flex;
  width: 100%;
  height: 100%;
}
.game{
  position: relative;
}
.game-board{
  width:600px;
  height: 600px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
}
.game-studio{
  width: 30%;
  height: 100%;
  background-color: gray;;
  position: absolute;
  right: 0;
}
</style>
