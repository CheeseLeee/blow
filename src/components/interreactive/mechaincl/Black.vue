<template>
  <div id="black" :style="{top:positionTop + 'px' ,left:positionLeft + 'px'}">
      <div class="black-1">waht</div>
      <div class="black-2">to do</div>
  </div>
</template>

<script lang='ts'>

export default {
  components: {

  },
    props:{
        positionTop:{
          type:String,
          default:'0'
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
.black-2{
    margin-bottom: 20px
;

    font-family: Arial;
    color: #fff;
    font-size: 18px;
}
.black-1{
font-family: frankfurter-plain;
    font-size: 60px;
    line-height: 54px;
        margin-bottom: 20px;
}
#black{
    position: absolute;
    width: 510px

;
    background-color: #444;
    padding: 40px

;
    border-style: solid;
    border-width: 10px
;
    border-color: #777;
    color:white;
}
</style>
