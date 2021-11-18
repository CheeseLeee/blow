<template>
  <div id="cli" :style="{bottom:positionBottom + 'px' ,left:positionLeft + 'px'}" >

  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
props:{

positionBottom:{
        type:String,
        default:'170'
    },
positionLeft:{
    type:String
    },
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
#cli{
    position: absolute;
    height: 500px;
    width: 110px;
    background-image: url('../../../assets/main/mechanical/cli.png');
}
</style>
