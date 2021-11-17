<template>
  <div :style="{bottom:positionBottom + 'px',left:positionLeft + 'px'}" class="gate-position">
     
         <p class="gate-p">{{title}}</p>
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
    },
        title:{
      default:'Title',
      type:String
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
.gate-p{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #fff;
  font-size: 60px;     
  text-align: center;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  top:5%;
/*   margin-top: 10px; */
}
.gate-position{
    width: 320px;
    height: 300px;
     position: absolute;

     background-image: url('../../assets/main/ground/gate.png');
}
</style>
