<template>
  <div id="fan">
      <div class="fan-flex-box">
          <div v-for="(item,index) in t1" :key="index" :style="{backgroundImage: 'url(' + item.src + ')'}">{{item.name}}</div>
      </div>
      <img class="fan-img" style="margin:0 20px" src="../../assets/main/lol.png" />
      <div class="fan-flex-box">
          <div v-for="(item,index) in fan" :key="index" :style="{backgroundImage: 'url(' + item.src + ')'}">{{item.name}}</div>
      </div>

  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  setup() {
    const t1 = [{
        name:'T',
        src:require('../../assets/main/nba-board-red.png')
    },
    {
        name:'1',
        src:require('../../assets/main/nba-board-red.png')
    }
    ] 
    const fan = [
    {  name:'F',
        src:require('../../assets/main/nba-board-blue.png')
    },
    {
        name:'A',
        src:require('../../assets/main/nba-board-blue.png')
    },
    {
        name:'N',
        src:require('../../assets/main/nba-board-blue.png')     
    }
    ]
    return {t1,fan}
  }
}
</script>

<style scoped >
.fan-img{
    transform: translateY(-50%);
}
.fan-flex-box div{
    font-size: 90px;
    font-weight: 600;
    color:white;
    text-align: center;
    line-height: 115px;
    margin: 0 10px;
    width: 110px;
    height: 140px;
}
.fan-flex-box{
    display: flex;
    justify-content: space-around;
}
#fan{
    position: absolute;
    left: 5700px;
    bottom: 115px;
    display: flex;
}
</style>
