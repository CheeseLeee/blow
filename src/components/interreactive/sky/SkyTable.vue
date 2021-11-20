<template>
  <div id="skytable">
      <div class="sky-table">
        <img class="contact-top" src="../../../assets/main/sky/title-contact.png"/>
        <img class="contact-box" src="../../../assets/main/sky/contact-box.png"/>
        <input class="input-1" v-model="tableInfo.em"/>
        <input class="input-2" v-model="tableInfo.sub"/>
        <input class="input-3" v-model="tableInfo.msg"/>
        <img @click="handleSumit" class="contact-bottom" src="../../../assets/main/sky/contact-button.png"/>
      </div>
  </div>
</template>

<script lang='ts'>
import { ElNotification} from 'element-plus'
import {reactive,h } from 'vue'
export default {
  components: {

  },

  setup() {
    let tableInfo = reactive({
      em:'',
      sub:'',
      msg:''
    })

    function handleSumit(){
      console.log(tableInfo)
        ElNotification({
        title: 'success',
        message: h('i', { style: 'color: teal' }, 'submit right'),
      })
    tableInfo.em = ''
    tableInfo.sub = ''
    tableInfo.msg = ''
    }
    return {tableInfo,handleSumit}
  }
}
</script>

<style scoped >
.input-1{
      position: absolute;
    top: 215px;
    left: 560px;
}
.input-2{
      position: absolute;
    top: 265px;
    left: 560px;
}
.input-3{
      position: absolute;
    top: 305px;
    left: 560px;
}
.sky-table{
    position: relative;
    width: 500px;
    height: 500px;

}
.contact-bottom{
    position: absolute;
    top:400px;
    left: 500px;
}
.contact-top{
    position: absolute;
    top: 50px;
    left: -100px;
}
.contact-box{
    position: absolute;
    top: 190px;
    left: 0;
}
#skytable{
    position: absolute;
    bottom: 8450px;
    left: 500px;
}
#skytable input{
  z-index: 9999;
  border:none;outline: none;
  background-color: rgb(242, 130, 23);
border-radius:0;
border-bottom:#d89531 1px solid;
box-shadow: 0px 0px 0px 0px;
}
@media screen and (max-width: 700px) {
  .contact-bottom{
      position: absolute;
      top:400px;
      left: 500px;
  }
  .contact-top{

      position: absolute;
      top: 50px;
      left: -100px;
  }
  .contact-box{

      position: absolute;
      top: 190px;
      left: 70px;
  }
  .input-1{
      position: absolute;
    top: 215px;
    left: 650px;
}
.input-2{
      position: absolute;
    top: 265px;
    left: 650px;
}
.input-3{
      position: absolute;
    top: 305px;
    left: 650px;
    cursor: pointer;
}

}
</style>
