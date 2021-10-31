<template>
  <div class="home" @keydown="handleKeyDown" v-bgi="'homedeepimg'">
    <div class="home-controller" v-if="isControllerShow">
      <div class="home-controller-head">
        <div class="home-controller-btns">
          <div class="circle-red" @click="handleClose"><span></span></div>
          <div class="circle-yellow" @click="handleScale"><span></span></div>
          <div class="circle-green" @click="handleStart"><span></span></div>        
        </div>
        <div class="home-controller-head-title">terminal</div>
      </div>
      <div :class="[!isSclaeController ? 'not-active-controller' : 'active-controller']">
        <div class="home-controller-body" ref="homebodyScorllDom_ref">
          <p class="home-controller-body-frist">welcome to here</p>
          <div style="padding:3px">
            <span >there is some help for you , you can input </span> 
            <span style="color:red;font-size:19px">'-- help '</span> 
            <span>for get these</span>
          </div>
          <div class="user-inputValue" ref="userOrderDom_ref">
            <div  v-for="(item,index) in userOrders" :key="index">
              <span style="color:green">></span>
              <span>{{item.value}}</span>

              <template v-if="item.children" >
                <div style="padding-left:25px" v-for="(item,index) in item.children" :key="index">
                  {{item}}
                </div>
              </template>
            </div>

          </div>

        </div>
     
      <div class="controller-input">
        <div>C:local\\:</div>
        <input type="text" v-model="controllerValue.value" v-focus :disabled="!isControllerShow"/>
      </div>
       </div>
    </div>
    <!--登录表单-->
    <div  v-if="!isControllerShow" class="login-form">
      <div>hahha</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive ,nextTick,onMounted} from 'vue'
import {getEquipment} from '../../utils/utils_fns'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
interface iControllerValue {
  value:string,
  children:string[]
}

    const Router = useRouter()
    let isSclaeController = ref(false)
    let userOrderDom_ref = ref() 
    let homebodyScorllDom_ref = ref()
    let isControllerShow = ref(true)
    function handleClose(){
      ElNotification({
        title: 'Error',
        message: 'The author has not figured out what to do',
        type: 'error',
      })
      //isControllerShow.value = false
    }
    function handleScale(){
      isSclaeController.value = !isSclaeController.value
      console.log(isSclaeController.value)
    }
    function handleStart(){
      Router.push({
        name:'Home'
      })
    }
    onMounted(() => {
      getEquipment()
    })
    
    const controllerValue:iControllerValue = reactive({
        value:'',
        children:[]
      })
      const userOrders:iControllerValue[] = reactive([])
      let hisControllerValue:string[] = reactive([])
      let hisIndex = ref(0)
      function handleKeyDown(e:KeyboardEvent):void{
        if(e.keyCode === 13){
          if(controllerValue.value === ''){
            return  
          }
          userOrders.push({...controllerValue})
          hisControllerValue.unshift(controllerValue.value)
          hisIndex.value = 0    
          switch(controllerValue.value){
            case '-- help':
              console.log('right')
              controllerValue.children.push('-- start:开始','-- end:undefined','-- clear:清理掉操作信息','-- deepclear:清理掉操作历史栈及信息','-- gobang:gobang is inventing','-- author:作者信息')   
              break
            case '-- start':
              Router.push({
                name:'Home'
              })
              break
            case '-- end':
              controllerValue.children.push('I haven not figured out what to do')
              break
            case '-- clear':
              userOrders.length = 0
              break
            case '-- deepclear':
               hisIndex.value = 0
               hisControllerValue = []
              break
            case '-- gobang':
                Router.push({
                name:'Gobang'
              })
              break
            case '-- author':
              controllerValue.children.push('Name:lzx,Born:1997-12-05,University:undefiend')
              break
            default:
              console.log('not found')
          }
          console.log()
          
          nextTick(() => {
            var scorllHeight = userOrderDom_ref.value.clientHeight
            homebodyScorllDom_ref.value.scrollTop = scorllHeight
            console.log(scorllHeight)
          })

          controllerValue.value = ''
          controllerValue.children = []
        }else if(e.keyCode === 38){
          console.log(hisControllerValue[hisIndex.value])
          console.log(hisControllerValue)
          console.log(hisIndex.value)
          if(hisControllerValue[hisIndex.value] === undefined){
            //controllerValue.value = hisControllerValue[0]         
          }else{            
            controllerValue.value = hisControllerValue[hisIndex.value]  
            hisIndex.value++          
          }     
        }
      }
</script>
<style scoped>
.not-active-controller{
  height: 300px;
  opacity: 1;
  transition: all 0.5s;
}
.active-controller{
  height: 0px;
   opacity:0;
  transition: all 0.5s;
}
::-webkit-scrollbar {
width:12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {

border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(219, 216, 216, 0.1);

}
::-webkit-scrollbar-thumb:window-inactive {
background:rgba(255,0,0,0.4);
}
.login-form{
  width: 37.5rem;
  height: 300px;
  margin:  0 auto;
  position: relative;
  top:50%;
  transform: translateY(-50%);
  
}
.login-form .el-form {
  width: 400px;
  margin:  0 auto;
}
.home{
  background-image: url('../../assets/WX20211026-214815@2x.png');
   background-size: 100% 100%;
  background-repeat: no-repeat; 
  height:100vh;
}
.user-inputValue{
  margin-bottom: 20px;
  padding: 3px;
wrap:break-word ;
  width: 100%;
}
.controller-input-animate{
  width: 10px;
  height: 5px;
  background-color: white;
  animation:input_animate ;
  animation-duration: 1.5s;
  animation-iteration-count:infinite;
  position: absolute;
  left:56px;
  bottom: 0;
}
@keyframes input_animate {
  20% {opacity: 0.2;}
  /* 60% {opacity: 0.6;} */
  100% {opacity: 1;}
}

.controller-input{
  width: 100%;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  bottom: 0;

  background-color: black;
   font-family: "Microsoft soft";
  color:white;

    
}
.controller-input input{
 outline-style: none ;
 border: 0px;
 flex-direction: column;
color:white;
  padding: 3px;
  background-color: black;
  
      flex: auto

}
.home-controller-body-frist{
  color:aqua;
  font-size: 18;
  padding: 3px;
  
}
/* .home-controller-btns div span{
  width: 5px;
  height: 5px;
  display: block;
  border-radius:50%;
  
  animation: cyclieBorder 1.5s  infinite;
} */
.home-controller-btns div{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
box-shadow: 0px 0px 1px red;
}
/* 		@keyframes cyclieBorder{
			10% {transform: scale(1);}
			100% {transform: scale(1.4);}
		} */
.circle-red{
  background-color: red;
}
.circle-yellow{
  background-color: yellow;
}
.circle-green{
  background-color: green;
}
.home-controller-btns{
  position: absolute;
  left: 0;
  top:50%;
  transform: translateY(-50%);
  margin-left:10px;
  display: flex;
  z-index: 199;
}
.home-controller-head-title{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50% ,-50%);
}
.home-controller-body{
  background-color: black;
height: 300px;
overflow-y: auto;
margin-bottom: 20px;
}
.home-controller{
  width: 52%;
  position: relative;
  opacity: 0.8;
  margin:  0 auto;
  top:100px;
  /* margin-top:50px; */
  color:white
}
.home-controller-head{
  z-index: 200;
  background-color: gray;
  height: 26px;
  width: 100%;
  position: relative;
}
@media all and (max-width: 376px) {
  .home-controller{
     width: 100%;  
    position: relative;
    opacity: 0.8;
    margin:  0 auto;
    height: 100vh;
    color:white;
    background:black;
  }
}

@media all and (max-width: 376px) {
  .home-controller-body{
  background-color: black;
  height:600px;
  overflow-y: auto;
  overflow-x: hidden;
  }
}
@media all and (max-width: 376px) {
  .home{
      background-image:none;
  background-size: 100%;
  top:0;
  }
  .home-controller{
    top:0;
  }
/*   width: 100%;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  bottom: 0;


   font-family: "Microsoft soft";
  color:white; */
}



</style>
