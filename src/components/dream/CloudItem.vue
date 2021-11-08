<template>
  <div>
    <img :style="{top:positionTop + 'px',left:positionLeft + 'px'}" class="cloud-position" src="../../assets/main/cloud.png" />

  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{

    positionTop:{
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
    z-index: 20;
}
</style>
