<template>
    <div class="home">
        <HeadCom></HeadCom>
        <!---:class="[(index + 1) % 2 === 0 ? 'ccc' : '' ]"-->
        <div class="home-body">
            <div class="home-body-frist">
                <div class="hex-box">
                    <div style="transform:translateX(52px)">
                        <div class="hex" :class="`hex-${index+1}`"  v-for="(item,index) in 7" :key="index">
                            <div class="left"></div>
                            <div class="middle"></div>
                            <div class="right"></div>
                        </div>
                    </div>
                </div>
                <div class="hex-box-mobile">
                    <img  src="../../assets/react.png" />
                </div>
                <p class="home-mid-title" v-opDepOn>WELCOME-TO-HOME</p>
                <p class="home-mid-new" v-opDepOn>it's empty,beacuse the writer is lazy</p>
                <div class="home-btns-box">
                    <div class="btns-confim"> Start Drawing</div>
                    <div class="btns-sure">Start Drawing</div>
                </div>
                <div class="btns-white">Start Drawing</div>
            </div>           
        </div>
         
        <div>???</div>
    </div>
</template>

<script setup lang="ts">
import HeadCom from '../../components/public/headCom/HeadCom.vue'
</script>

<style scope>
.btns-white{
    cursor: pointer;
    width: 35%;
    position:relative;
    top:25%;
    left:50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 12px 12px;
    text-align: center;
    border-radius: 15px;
}
.home-btns-box{
    width: 50%;
    position:relative;
    top:22%;
    left:50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.home-btns-box div{
    width: 140px;
    text-align: center;
    padding: 7px 12px;
    border-radius: 15px;
}
.btns-confim{
background: linear-gradient(
90deg,#2d9bea,#8d2ee4);
cursor: pointer;
}
.btns-sure{
        background: linear-gradient(
44deg,#ff096e,#ff575f,#ff7e4e,#fd9f36)!important;
    color: #fff!important;
    cursor: pointer;
}
.home-body-frist{
    
       width: 100%;
        height: 100vh;
     background-image: url('../../assets/coast.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
.home-body{


}
.home-mid-new{
    position:relative;
    top:17%;
    left:50%;
    transform: translateX(-50%);
    font-size: 30px;
    font-weight: 500;
    font-family: sans-serif;
    z-index: 99;
    color:#0A122A;
    text-align: center;    
}
.home-mid-title{
    text-transform: uppercase;
    font-size: 56px;
    font-weight: 1000;
    position:relative;
    top:15%;
    left:50%;
    transform: translateX(-50%);
    font-family: sans-serif;
    z-index: 99;
    color:#FE2E64;
    text-align: center;
}
.home{
    height: 1200px;

    height: 1200px; 
/*      background-image: linear-gradient(to right, #100027 , #29002a); */
}
.ccc{
    margin-left: 53px; 
} 

.hex { 
    float: left; 
    
    margin-left: 3px; 
    margin-bottom: -26px; 
} 
.hex .left { 
width: 0; 
border-bottom: 30px solid #6C6; 
border-left: 52px solid transparent; 
border-right: 52px solid transparent;
} 
.hex .middle { 
width: 104px; 
height: 60px; 
background-color: #6C6;
} 
.hex .right { 
width: 0; 
border-top: 30px solid #6C6; 
border-left: 52px solid transparent; 
border-right: 52px solid transparent
} 

.hex-3 {
clear: left;
transform: translateX(-52px);
}
.hex-4{
  transform: translateX(-52px);  
}
.hex-5{
  transform: translateX(-52px);  
}
.hex-6{
   clear: left; 
}
.hhh{
    height: 900px;
    width: 300px;
    background-color: red;
}
.hex-box-mobile{
    display: none;
}
    .hex-box{
        position: fixed;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        width: 500px;
        opacity: 0.1;
        display: flex;
        justify-content: center;
    }
@media all and (max-width: 376px) {
    .hex-box{
     display: none;
    }
    .hex-box-mobile{
        display: block;
        width: 100%;
        position: fixed;
        left: 50%;
        top:20%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hex-box-mobile img{
        width: 140px;
        height: 140px;
        opacity: 0.4;
    }
}

</style>