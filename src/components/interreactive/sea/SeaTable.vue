<template>
  <div id="sea-table" :style="{left:positionLeft + 'px'}">
      <div class="sea-ribbon"><ribbon :redText="title"></ribbon></div>
      <div class="sea-table-main">
          <div class="sea-table-skills">
             <ribbon v-for="(item,index) in skills" :key="index"  type="pink" :pinkText="item.pinkText"></ribbon>
          </div>
           <div class="sea-table-item"  v-for="(item,index) in itemsTittle" :key="index">
                <div class="sea-table-item-titte">{{item.text}}</div>
                <div class="sea-img-box" :class="[!showItem ? 'itemOpacity' :'']" v-for="(showItem,index) in item.trues" :key="index">
                    <img :src="item.src" />
                    <img class="item-eyes" :class="[eyesOpen ? 'open-eyes' : '']" :src="item.eyes" />
                </div>
           </div>
      </div>
  </div>
</template>

<script lang='ts'>
import Ribbon from '../Ribbon.vue'
import {onMounted,ref} from 'vue'
import {getRandomInt} from '../../../utils/utils_fns/index'
export default {
  components: {
    Ribbon
  },
 props:{
    positionLeft:{
        type:String,
        default:'300'
    },
    title:{
        type:String,
        require:true      
    },
    skills:{
        type:Array,
        require:true
    },
    itemsTittle:{
        type:Array,
        require:true       
    }
 },
   setup() {
       let eyesOpen = ref(false)
       onMounted(() => {
           setInterval(() => {
               eyesOpen.value = !eyesOpen.value
           },5000)
       })
        var n = Math.floor(Math.random() * 20) + 1
        var x:any = Math.pow(2,n)
        console.log(x)
        var numString = '01234567899996666'//x.toString("2")
        console.log(numString)
        //var result = Number(arr)
        //console.log('222',result)
        let numArr = []
        for(var i = 0 ; i < 4 ; i++){
            if(i === 0){
                numArr.push(numString.slice(i,4))
                
            }else{
                numArr.push(numString.slice(i * 4 + 1, 5 + i * 4))
            }
            
        }
        console.log(numArr)

    return {eyesOpen}
  }
}
</script>

<style scoped >
.open-eyes{
    opacity: 1 !important;
}
.itemOpacity{
     opacity: 0;
}
.sea-img-box{
    position: relative;
}
.item-eyes{
    position:absolute;
    top:45px;
    left: 18px;
    opacity: 0;
    transition:opacity .5s ease-in;
}
    

.sea-table-item-titte{
    position: absolute;
    top:0;
    left: 0;
    background-color: #00bff3;
    padding: 6px 10px;
    font-family: frankfurter-medium-plain;
    color: #0072bc;
    font-size: 18px;
}
.sea-table-item{
    padding-left:1px;
    border-left: 1px solid #00bff3;
    width: 16%;
    height: 100%;
  align-items: flex-start;
    position: relative;
        display: flex;
   flex-direction: column;
    justify-content: space-evenly;

}
.sea-table-main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
   
}
.sea-table-skills{
    width: 20%;
    height: 100%;
   
    display: flex;
   flex-direction: column;
    justify-content: space-evenly;
    align-items: center
}
.sea-ribbon{
    position: absolute;
    top:-80px;
    left: 50%;
    transform: translateX(-50%);
}
#sea-table{
    top: -80px;
    width: 1000px;
    height: 500px;
    position: relative;
}
</style>
