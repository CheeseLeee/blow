<template>
  <div v-moveAnimateY="animatePosition" id="black" :style="{top:positionTop + 'px' ,left:positionLeft + 'px'}">
    <img src="../../../assets/main/mechanical/chain-block.png" />
    <div class="black">
      <div class="black-1">业精于勤荒于嬉</div>
      <div class="black-2">行成于思毁于随</div>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  components: {

  },
    props:{
      animatePosition:{
        type:String,
        default:'24532'
      },
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
.black{
    width: 510px

;
    background-color: #444;
    padding: 40px

;
    border-style: solid;
    border-width: 10px
;
    border-color: #777;
}
#black{
  transition: transform 1s;
  transform: translateY(-300px);
    position: absolute;
flex-direction: row;
display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: center;
    color:white;
}
</style>
