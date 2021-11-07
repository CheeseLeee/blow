<template>
  <div id="main">
        <head class="main-head">
            <p>lzx</p>
            <div>
                <el-popover
                    v-for="(item,index) in mainHeadImgs" :key="index"
                    placement="bottom"
                    title="call me"
                    :width="200"
                    trigger="hover"
                    :content="item.content"
                >
                    <template #reference>
                        <img :src="item.src" alt="message for" />
                    </template>
                </el-popover>              
            </div>
        </head>
        <div class="main-body-1">
            <div class="contxt1">
                <p class="contxt-p1">I PUT MY LIFE INTO NOW HRER</p>
                <p class="contxt-p2">
                    There is my life now , if you hava some interesting , i'll introduce some about info of me now ,
                    such as 'aboout life ' or ‘work' , maybe more than and more than
                </p>
                <div class="btn" @click="handleGoLife">
                    into this
                </div>
            </div>
        </div>
        <div class="main-body-2">
            <div class="contxt2">
                <p class="contxt-p1">I PUT MY PAST INTO HERE</p>
                <p class="contxt-p2">I give up past experience never , even with regrets , if you want to see my heart , you can do this</p>
                <div class="btn">
                    next
                </div>
            </div>
        </div>
        <div class="main-body-3">
            <div class="contxt3">
                <p class="contxt-p1">who have no dream</p>
                <p class="contxt-p2">
                    It's respect that someone with their dream and pay their all attentions , even almost people is common , except...
                </p>
                <div class="btn">
                    go on 
                </div>
            </div>
        </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
    const mainHeadImgs = [
        {src:require('../../assets/main/qq.png'),
        content:'QQ:958986887'},
        {src:require('../../assets/main/wechat.png'),
        content:'WECHAT:DecWaltzX'},
        {src:require('../../assets/main/github.png'),
        content:'github:github@958986887.com'},
        {src:require('../../assets/main/email.png'),    
        content:'em:958986887@qq.com'}
    ]
    let Router = useRouter()
    function handleGoLife(){
        Router.push({
            name:'Life'
        })
    }
</script>

<style scoped >

.contxt-p1{
    font-family: miso-bold;
    color: #ffffff;
    font-size: 46px;
    line-height: 56px;
    margin-bottom: 20px;
}
.contxt-p2{
    font-family: Arial;
    color: #ffffff;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
}
.btn:hover{
     cursor: pointer;
     color:black;
    background-color:white; 
}
.btn{
    cursor: pointer;
    padding: 10px 15px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color:white;
    border-radius: 10px;
    border: 1px white solid;
}
.contxt1{
    width: 330px;
    position: absolute;
    top:50%;
    left:5%;
    transform: translateY(-50%);
}
.contxt2{
    width: 330px;
    position: absolute;
    top:50%;
    right:15%;
    transform: translateY(-50%);
}
.contxt3{
    width: 330px;
    position: absolute;
    top:50%;
    left:5%;
    transform: translateY(-50%);
}
.main-head p{
    margin-left:20px;
    font-size: 26px;
    font-family: monospace;
}
.main-body-1,.main-body-2,.main-body-3{
    width: 100%;
    height: 600px;
    position: relative;
}
.main-body-3{
    background-image: url('../../assets/main/design-portfolio.jpeg');
}
.main-body-2{
    background-image: url('../../assets/main/illustration-portfolio.png') ;
}
.main-body-1{
    background-image: url('../../assets/main/interactive-resume.png');
}
.frame {
  
}

.pacman {
	position: absolute;
width: 100px;
    height: 100px;
  top: 150px;
    left: 150px;
	fill: none;
	stroke: #F4D146;
	stroke-width: 50px;
	stroke-linecap: butt;
	stroke-dasharray: 157;
	animation: mouth .7s ease-in-out infinite;
}

.eye {
	position: absolute;
	width: 12px;
	height: 12px;
	top: 167px;
	left: 204px;
	fill: #2C2E2E;
	animation: eye .7s ease-in-out infinite;
}

.dots {
	position: absolute;
	height: 14px;
	width: 240px;
	top: 193px;
	left: 180px;
	stroke: #F4D146;
	stroke-width: 14px;
	stroke-dasharray: 0px 50px;
	stroke-linecap: round;
	animation: points .7s linear infinite;
	stroke-dashoffset: 14;
}

@keyframes mouth {
	0%, 100% {
		stroke-dashoffset: 0;
		transform: rotate(0deg) translate3d(0,0,0);
	}
	50% {
		stroke-dashoffset: 39;
		transform: rotate(45deg);
	}
}

@keyframes eye {
	0%, 100% {
		transform: translate3d(0,0,0);
	}
	50% {
		transform: translate3d(-6px, -3px, 0);
	}
}

@keyframes points {
	0% {
		stroke-dashoffset: 14;
		transform: translate3d(0,0,0);
	}
	100% {
		stroke-dashoffset: 64;
	}
}



.main-head img{
    margin: 20px;
}
.main-head div{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.main-head{
    background-color:#505050;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-head p{
    color: #ffffff;
    font-size: 30px; 
}

@media all and (max-width: 763px) {

    .contxt2{
    width: 330px;
    position: absolute;
    top:0;
    right: 0%;
    left:0;
    transform: translateY(0)
    }
}
</style>
