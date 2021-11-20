<template>
  <div id="skycloud">
      <div class="skycloud-top"></div>
      <div class="skycloud-body"></div>
      <div class="skycloud-bottom"></div>
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  setup() {
    return {}
  }
}
</script>

<style scoped >
#skycloud{
    position: absolute;
    width: 100%;
    right:0 ;
    bottom: 5000px;
    z-index: 20;
}
.skycloud-body{
    width: 100%;
    height: 120px;
    background-color: #fff;
}
.skycloud-top{
    width: 100%;
    height: 21px;
    background-image: url('../../../assets/main/sky/contact-cloud-top.png');
}
.skycloud-bottom{
       width: 100%;
       height: 21px;    
    background-image: url('../../../assets/main/sky/contact-cloud-bottom.png'); 
}
</style>
