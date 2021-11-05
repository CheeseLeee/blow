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
                    <div class="btns-confim"> 
                        <img src="../../assets/edit.png" />
                        <p>do nothing</p>
                    </div>
                    <div class="btns-sure">
                        <img src="../../assets/owner.png" />
                        <p>do nothing</p>                      
                    </div>
                </div>
                <div class="btns-white">
                    <img src="../../assets/help.png" />
                    <p style="margin-left:8px">do nothing</p>                   
                </div>
            </div>
            <div class="home-body-second">
                <img class="T1" src="../../assets/T11.png" />
                <!--<div class="swiper-left-text">it's swiper</div>-->
                  <el-carousel indicator-position="none">
                    <el-carousel-item>
                        <img src="../../assets/2013skt.jpeg" />
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../../assets/2015skt.jpeg" />
                    </el-carousel-item>
                     <el-carousel-item>
                        <img src="../../assets/2016skt.jpeg" />
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="home-body-book">
                <div class="home-body-book-text">
                    <p>i would try to introduce scheming book</p>
                    <p>i like them very much</p>
                    <!-- <p>if you read it </p> -->
                </div>
                <div class="home-body-book-img">
                    <div class="home-body-img-box" v-for="(item,index) in books" :key="index">
                        <div class="item" :style="{backgroundImage: 'url(' + item.url + ')'}"  >
                            
                        </div>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>

            <div class="write-box">
                <div class="write-animatebox">
                </div>
                <div class="write-flexbox">
                    <div style="width:45%;z-index:20">
                        <p class="p1">Author's words</p>
                        <p class="p2">this is beat</p>
                        <p class="p3">more function will be comming soon</p>
                        <div class="pbtn " >
                            GO
                        </div>
                    </div>                   
                    <img style="width:500px;height:400px" src="../../assets/vscode.png" />
                </div>
                
            </div>

            <div class="home-body-thirty">
                <p class="en-title">English learn</p>
                <div class="masonry">
                    
                    <div class="item" v-for="(item,index) in learnEn" :key="index">
                        <img :src="item.url" />
                    </div>
                </div>
            </div>

            <div class="bottom-box">
                <p class="bottom-p1">Create and Life</p>
                <p class="bottom-p2">it's better to do than saying </p>
                <div class="bottom-box-btn">
                    welcome to Join us
                </div>
            </div>

            <div class="line-bottom"></div>

            <div style="width:40%;height:200px"></div>
        </div>           
    </div>
</template>

<script lang="ts">
const changeOpacity = (el?:HTMLElement) => {
    console.log(el)
    return function (){
        //console.log($event,el)
        if(el){
            const scrollTop = document.documentElement.scrollTop | document.body.scrollTop
            if(scrollTop !== 0){
                el.style.opacity = `${1000/scrollTop * 0.02 > 0.1 ? 1000/scrollTop * 0.02  : 0}`
            }else{
                el.style.opacity = 1 + ''
            }
        }else{
            return
        }

    }
}


import HeadCom from '../../components/public/headCom/HeadCom.vue'
export default {
    components:{
        HeadCom,
        //SwiperSlide,
    },
    directives:{
        //滚动修改透明度
        opDepOn:{
            mounted(el:HTMLElement):void{
                //let preScrollTop = 0
                window.addEventListener('scroll',changeOpacity(el))
            },
            beforeUnmount():void{
                window.removeEventListener('scroll',changeOpacity())
            }
        }
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup(){
        const learnEn = [
            {
                name:'',
                url:require('../../assets/english/1.jpg'),
            },
                        {
                name:'',
                url:require('../../assets/english/2.jpg')
            },
                        {
                name:'',
                url:require('../../assets/english/3.jpg')
            },
                        {
                name:'',
                url:require('../../assets/english/4.jpg')
            },
                        {
                name:'',
                url:require('../../assets/english/5.jpg')
            },
                        {
                name:'',
                url:require('../../assets/english/6.jpg')
            },
                        {
                name:'',
                url:require('../../assets/english/7.jpg')
            },
                        {
                name:'',
                url:require('../../assets/english/8.jpg')
            },
                        {
                name:'',
                url:require('../../assets/english/9.jpg')
            },
                                    {
                name:'',
                url:require('../../assets/english/9.jpg')
            },

        ]
        const books = [
            {
            name:'告白',
            url:require('../../assets/gb.jpeg')
        },
        {
            name:'三体',
            url:require('../../assets/st.jpeg')
        },
        {
            name:'新参者',
            url:require('../../assets/xcz.jpeg')
        },
            {
            name:'嫌疑人x的献生',
            url:require('../../assets/x.jpeg')
        },{
            name:'解忧杂货店',
            url:require('../../assets/jy.jpeg')
        },
        {
            name:'白夜行',
            url:require('../../assets/byx.jpeg')
        }]
   
      return {
          books,learnEn,
  
      }
    }
    
}



</script>

<style scope>

.home-body-second img{
    width: 100%;
    height: 100%;
}
.home-body-second .T1{
    flex:1;
    width: 50%;;
}
.bottom-box-btn{
    width: 160px;
    margin: 0 auto;
    padding: 5px 10px;
    border-radius: 50px;
    background: linear-gradient(
44deg,#ff096e,#ff575f,#ff7e4e,#fd9f36)!important;
    color: #fff!important;
    border: none;
    text-align: center;
    transition:all .5s;
    cursor: pointer;
}
.bottom-box-btn:hover{
    transform: translateY(-3px);
}
.bottom-p2{
    color: #6785b9;
    font-size: 20px;
    margin: 5px 0;
}
.bottom-p1{
    font-weight: 700;
    font-size: 42px;
    color: #212529;
    font-family: Roboto,sans-serif;
}
.bottom-box{
    width: 60%;
    margin: 0 auto;
    margin-top: 15px;
    height: 300px;
    text-align: center;
}
.pbtn{
    width: 140px;
    height: 40px;
    font-family: Roboto,sans-serif;
    font-size: 24px;
    color:white;
    border-radius: 20px;
    border:solid 1px white;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    z-index: 120;
}
.pbtn:hover{
    background-color: white;
    color:black
}
.en-title{
    width: 40%;
    text-align: center;
    font-size: 29px;
    color:black;
    margin:0 auto;
}
.p1{
    font-weight: 700;
        font-size: 42px;
    color:white;
    font-family: Varela Round,sans-serif;
}
.p2{
        font-size: 20px;
    font-weight: 700;
    color:white;
    font-family: Varela Round,sans-serif;
}
.p3{
            font-size: 18px;
    font-weight: 700;
    color:white;
    font-family: Varela Round,sans-serif;
    margin: 5px 0 10px 0;
}

.write-flexbox{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@keyframes backgroundScroll
{
	from {top:0px;}
	to {top:300px;}
}
.write-animatebox{
    opacity:.5;
    position: absolute;
    left: 0;
    top: -100px;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url('../../assets/pattern.png');
    -webkit-animation: backgroundScroll 7s linear infinite;
    animation: backgroundScroll 7s linear infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
.write-box{
    overflow: hidden;
    position: relative;
    width: 97%;
    border-radius: 10px;
    height: 500px;
    margin:  0 auto;
    background: linear-gradient(
45deg,#7216b7,#000); 
margin-top:15px;

}

.home-body-book-img  p{
    text-align: center;
}
.home-body-book-img .item{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: gray;
    border:1px solid gray;
    background-size: cover;
    margin: 5px;
}
.home-body-book-img{
    width: 50%;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
}
.home-body-book{
    margin-top:15px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.home-body-book-text{
    width: 50%;
    margin-left:10px;
    font-family: fantasy;
    font-size: 41px;
}
.home-body-thirty{
    width: 90%;
    margin: 0 auto;
    padding-top:10px;
}
.masonry {
    columns: auto 300px
/*     column-count: 4;
    column-gap: 0; */
}
.masonry .item{
    padding: 5px;
}
.masonry .item img{
    display: block;
    width: 100%;
    height: auto;
}
.home-body-second  .swiper-container{
    margin-right: 0;
}
.home-body-second .swiper-container{
    width: 600px
}
.el-carousel--horizontal{
    flex:1;
}
.home-body-second{
 flex-direction: row;
    display: flex;
    justify-content:center;
    margin-top:15px;
}
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
        display: flex;
    justify-content: center;
    align-items: center;
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
    color:white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:5px 10px;
background: linear-gradient(
90deg,#2d9bea,#8d2ee4);
cursor: pointer;
}
.btns-sure{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:5px 10px;
        background: linear-gradient(
44deg,#ff096e,#ff575f,#ff7e4e,#fd9f36)!important;
    color: #fff!important;
    cursor: pointer;
}
.home-body-frist{
    
       width: 100%;
        height: 100vh;
     background-image: url('../../assets/c83304dbe17b51a.gif');
    background-repeat: no-repeat;
    background-size: 100%;
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
    color:#a4c5ff;
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
    color:white;
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
.title {
  text-align: center;
  line-height: 50px;
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

.swiper-slide img{
    width: 100%;

}
.line-bottom{
    width: 70%;
    height: 1px;
    background-color: gray;
    margin: 0 auto;
}
@media all and (max-width: 400px) {
    .home-body-book-img .item{
        width: 60px;
        height: 60px;
    }
    .masonry{
        columns:auto 50px
    }
    
 /* column-count: 4; column-gap: 0; */;
    .home-body-img-box p{
        font-size: 12px;
    }
    .masonry .item{
        width: 30%;
    }
    .masonry .item img{
       
        height: 100px;
    }
    .home-body-book-text p{
        font-size: 25px;
    }
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
        opacity: 0.1;
    }
    .home-body-frist{
    
    width: 100%;
    height: 100%;
     background-image: url('../../assets/coast.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
}

</style>