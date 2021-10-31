<template>
    <div :class="[isTopScorll ? 'head' : 'notTop-head']" >
        <img class="head-vue-logo" src="../../../assets/logo.png" />       
        <div class="head-tab" v-for="(item,index) in tabs" :key="index">
            <img :style="{transform:`translateY(${item.handleTranslate}px)`}" :src="item.src"/>
        </div>
        <div class="head-tab-mobile">MENU</div>
        <div>
            <i class="iconfont  icon-github1 icon-github1size"></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,reactive,onMounted,onBeforeUnmount} from 'vue'
//没有切图小姐姐，为了像素图，俺自己截的图，和瞎操作了一下，非专业。
const tabs = [
    {src:require('../../../assets/comHead/js.png'),
    handleTranslate:8},
    {src:require('../../../assets/comHead/ts.png'),handleTranslate:8},
    {src:require('../../../assets/comHead/vue.png'),handleTranslate:15},
    {src:require('../../../assets/comHead/react.png'),handleTranslate:7},
    {src:require('../../../assets/comHead/others.png'),handleTranslate:9},
]
/* const tabs = reactive([
    {
        name:'Vue',
        iconClass:'icon-Vue'
    },
        {
        name:'React',
        iconClass:'icon-React'
    },
        {
        name:'Js',
        iconClass:'icon-JavaScript'
    },
        {
        name:'Ts',
        iconClass:'icon-typescript'
    },
        {
        name:'Other',
        iconClass:'icon-qita'
    },
]) */
let isTopScorll = ref(true)
let flag = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
function scorll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if(scrollTop === 0){
        console.log('0000')
        isTopScorll.value = true
    }else{
        if(isTopScorll.value === false){           
        return
        }
        isTopScorll.value = false
    }
}
onMounted(() => {
    window.addEventListener('scroll',scorll,true)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll',scorll,true)
})

console.log(flag)

</script>

<style>
.head-tab-mobile{
  font-family: Georgia, 'Times New Roman', Times, serif;  
  font-size: 18px;
  display: none;
}
.head-vue-logo{
    width: 32px;
    height: 32px;
}
.head-tab img:hover{
    cursor: pointer;
    transform: rotateX(
360deg);
}
.head-tab img{    
    transition: all 1s;
}
.head-tab{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color:white;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.head .icon-github1size{
    font-size: 32px;
}
.head{
    width: 100%;
    height: 30px;
    padding: 10px 0;
    opacity: 0.8;
    display: flex;
    justify-content:space-between;
    align-items: center;
    transition: all 0.5s;
     background-color: #8f91ec;
     overflow: hidden;
}
.notTop-head{
    position: fixed;
    top:0;
    width: 100%;
    height: 30px;
    padding: 20px 0;
    opacity: 0.6;
    z-index: 199;
    background-color: #8f91ec;
    display: flex;
    justify-content:space-between;
    align-items: center;
    transition: all 0.5s;
}
/* @media all and (max-width: 376px) {
  .head-tab{
      display: none;
  }
  .head-tab-mobile{
    display: block;
  }
} */
@media all and (max-width: 376) {
    .home .home-mid-title{
        color:#2E2E2E;
        font-size:18px;
    }
  .head-tab{
      display: none;
  }
  .head-tab-mobile{
    display: block;
  }
}
@media all and (max-width: 855px) {

  .head-tab{
      display: none;
  }
  .head-tab-mobile{
    display: block;
  }
}
</style>