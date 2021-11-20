<template>
  <div id="banner" :style="{bottom : positionBottom + 'px'}"> 
      <div v-if="type === '1' " class="banner1">
          <img src="../../../assets/main/sky/banner-top-a.png" />
          <div class="banner-body-a">
              <p class="banner-text-p">{{title}}</p>
              <h2 >{{context}}</h2>
          </div>
          <img src="../../../assets/main/sky/banner-bottom-a.png" />
      </div>
      <div v-if="type === '2'" class="banner1">
          <img src="../../../assets/main/sky/banner-top-b.png" />
            <div class="banner-body-b">
              <p class="banner-text-p">{{title}}</p>
            <h2 >{{context}}</h2>
          </div>
          <img src="../../../assets/main/sky/banner-bottom-b.png" />
      </div>
  </div>
</template>

<script lang='ts'>
export default {
  components: {

  },
  props:{
      type:{
          type:String,
          default:'1'
      },
      positionBottom:{
          type:String
      },
      title:{
          type:String
      },
      context:{
         type:String 
      }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped >


.banner1{
    display: flex;
    align-items: center;
    flex-direction: column;
}
#banner h2{
    margin-top: 5px;
        line-height: 60px;
    font-family: frankfurter-plain;
    font-size: 62px;
    font-weight: 600;
}
.banner-text-p{
        font-family: frankfurter-medium-plain;
    font-size: 24px;
    width: 440px;
    padding-bottom: 5px;
    border-bottom: solid white 1px;
}
.banner-body-a{
    width: 440px;
    padding: 20px;
    background-color: #f7941d;
}
.banner-body-b{
    width: 440px;
    padding: 20px;
    background-color: #f26d7d;
}
#banner{
    position: absolute;
    bottom: 1200px;
    left: 900px;
    color: white;
}
@media screen and (max-width: 700px) {
    .banner-body-a{
        width: 30%;
        padding: 10px;
        background-color: #f7941d;
    }
    .banner-body-b{
    width: 30%;
    padding: 10px;
    background-color: #f26d7d;
}
.banner-text-p{
        font-family: frankfurter-medium-plain;
    font-size: 14px;
    width: 30%;
    padding-bottom: 2px;
    border-bottom: solid white 1px;
}
#banner h2{
    margin-top: 3px;
    font-family: frankfurter-plain;
    font-size: 21px;
}
#banner img{
    width: 40%;
}
}
</style>
