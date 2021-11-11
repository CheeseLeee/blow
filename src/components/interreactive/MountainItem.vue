<template>
  <div>
    <img :style="{bottom:positionBottom + 'px',left:positionLeft + 'px'}" class="cloud-position" src="../../assets/main/mountain.png" />

  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
    positionBottom:{
        default:'120',
        type:String,
    },

    positionLeft:{
        default:'0',
        type:String
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
.cloud-position{
    position: absolute;

}
</style>
