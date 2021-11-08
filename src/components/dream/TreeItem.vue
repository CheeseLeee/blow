<template>
  <div>
    <img v-if="type === 'd'" :style="{top:positionTop,bottom:positionBottom + 'px',left:positionLeft + 'px'}" class="tree-position" src="../../assets/main/tree-bright-d.png" />
    <img v-if="type === 'a'"  :style="{top:positionTop,bottom:positionBottom + 'px',left:positionLeft + 'px'}" class="tree-position" src="../../assets/main/tree-dark-a.png" />
    <img v-if="type === 'b'"  :style="{top:positionTop,bottom:positionBottom + 'px',left:positionLeft + 'px'}" class="tree-position" src="../../assets/main/tree-dark-b.png" />
    <img v-if="type === 'c'"  :style="{top:positionTop,bottom:positionBottom + 'px',left:positionLeft + 'px'}" class="tree-position" src="../../assets/main/tree-dark-c.png" />
    <img v-if="type === 'e'"  :style="{top:positionTop,bottom:positionBottom + 'px',left:positionLeft + 'px'}" class="tree-position" src="../../assets/main/tree-bright-e.png" />
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
    type:{
        type:String
    },
    positionTop:{
        type:String,
    },
    positionBottom:{
        default:'120',
        type:String
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
.tree-position{
    position: absolute;
    z-index: 10;
}
</style>
