<template>
  <div class="game">
      <div class="game-board">
        <div class="game-studio"></div>
      </div>
      
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  components: {

  },
  setup() {
    console.log('dev-dev')
    return {}
  }
})
</script>

<style scoped >
.game{
  position: relative;
}
.game-board{
  width:80%;
  height: 100vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: red;
}
.game-studio{
  width: 30%;
  height: 100%;
  background-color: green;;
  position: absolute;
  right: 0;
}
</style>
