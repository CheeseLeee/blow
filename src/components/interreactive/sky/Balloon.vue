<template>
  <div >
      <div v-if="type==='1'" id="balloon"></div>
      <div v-if="type==='2'" class="balloon-clone" :style="{left:positionLeft,bottom:`${translateY}px`}" ></div>
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
      positionLeft:{
        type:String,
        default:'50%'
      },
      translateY:{
        type:String,
        default:'150'
      },
      type:{
        type:String
      },

  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
.balloon-clone{
    transition: bottom 1s;
    height: 700px;
    width: 400px;
    position: fixed;
    left: 50%;
    margin-left: -200px;
    z-index: 1001;
    bottom: 150px;;
    background-image: url('../../../assets/main/sky/balloon.png');
    
}
#balloon{
    height: 700px;
    width: 400px;
    position: absolute;
    left: 1000px;
    z-index: 1001;
    top: -700px;
    background-image: url('../../../assets/main/sky/balloon.png');
}
</style>
