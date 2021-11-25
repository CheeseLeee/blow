<template>
  <div id="square" :style="{background:bgColor}">

  </div>
</template>

<script lang='ts'>
export default {
    props:{
        bgColor:{
            type:String
        }
    },
    components: {

    },
    setup() {
    return {}
    }
}
</script>

<style scoped >
#square{
    width: 48px;
    height: 48px;
    margin:1px;
    background-color: tomato;
}
</style>
