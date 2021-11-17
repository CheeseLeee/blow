<template>
  <div id="sea-table" :style="{left:positionLeft + 'px',top:positionTop + 'px'}">
      <div style="position:relative">
      <div class="sea-ribbon"><ribbon :redText="headtitle"></ribbon></div>
      </div>
      <div class="sea-table-main">
          <div class="sea-table-itemsY">
             <ribbon v-for="(item,index) in itemsY" :key="index"  type="pink" :pinkText="item.pinkText"></ribbon>
          </div>
           <div class="sea-table-item"  v-for="(item,indexX) in itemsX" :key="indexX">
                <div class="sea-table-item-titte">{{item.text}}</div>
                <div class="sea-img-box" :class="[!showItem ? 'itemOpacity' :'']" v-for="(showItem,indexY) in item.trues" :key="indexY">
                    <img :src="item.src" />
                    <img class="item-eyes" :style="{left:eye_positionLeft +'px',top:eye_positionTop + 'px'}" :class="[openEyes(indexX,indexY) ? 'open-eyes' : '']" :src="item.eyes" />
                </div>
           </div>
      </div>
  </div>
</template>

<script lang='ts'>
import Ribbon from '../Ribbon.vue'
import {reactive} from 'vue'

export default {
  components: {
    Ribbon
  },
 props:{
    headtitle:{
        type:String,
    },
     eye_positionLeft:{
         type:String,
         default:'18'
     },
     eye_positionTop:{
         type:String,
         default:'45'
     },
    positionTop:{
        type:String,
       
    },
    positionLeft:{
        type:String,
        default:'300'
    },
    itemsY:{
        type:Array,
        require:true
    },
    itemsX:{
        type:Array,
        require:true       
    }
 },
   setup() {
        let numArr:any = reactive([])
        function openEyes(x:any,y:any){           
            if(numArr[x][y] === '1'){
                return true
            }else{
                return false
            }                       
        }
        rendomEyes()
        function rendomEyes(){
            numArr.length = 0
            console.log(numArr,'before')
            var x:any = Math.floor(Math.random()* 2**20) 
            var twoX = x.toString("2")
            twoX = twoX.length !== 20? '0'.repeat(20-twoX.length) + twoX : twoX        
            for(var i = 0 ; i < 5 ; i++){
                if(i === 0){
                    numArr.push(twoX.slice(i,4))                
                }else{
                    numArr.push(twoX.slice(i * 4 , (1 + i) * 4))
                }           
            }
        }
        setInterval(() => {
            rendomEyes()
        },4500)
    return {openEyes}
  }
}
</script>

<style scoped >
@keyframes openEyes
{
     0%   {opacity:1;}
     100% {opacity: 0;}
}
.open-eyes{
    
    animation:openEyes 1s
    
}
.itemOpacity{
     opacity: 0;
}
.sea-img-box{
    position: relative;
}
.item-eyes{
    position:absolute;

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
.sea-table-itemsY{
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
    margin: 0 30px;
   /*  position: relative; */
}
</style>