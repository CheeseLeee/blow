<template>
    <div class="head">
        <img class="head-vue-logo" src="../../../assets/logo.png" />
        <div class="head-tab">
            <p  v-for="(item,index) in tabs" :key="index">{{item}}</p>

        </div>
        <div class="head-tab-mobile">MENU</div>
        <div>
            <i class="iconfont  icon-github icon-github1size"></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
const tabs = reactive(['Vue','React','TS','JS','Thought','Other'])


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
.head-tab p:hover{
    transform: rotateX(
360deg);
}
.head-tab p{
    margin: 0 6px;
    cursor: pointer;
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
    background-color: gray;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
@media all and (max-width: 376px) {
  .head-tab{
      display: none;
  }
  .head-tab-mobile{
    display: block;
  }
}
</style>