const seaTableFish = {
    data:{
        dataX:[
            {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},     
            {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},
            {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},
            {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},
            {text:'EXPERT',trues:[false,false,false,false],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},],
        dataY:[
            {pinkText:'JAVASCRIPT'},
            {pinkText:'HTML'},
            {pinkText:'CSS'},
            {pinkText:'VUE'}]
    },
    headtitle:"Web Developoment"
}

const seaTableCrab = {
    data:{
        dataX:[
            {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},     
            {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
            {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
            {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
            {text:'EXPERT',trues:[true,false,false,false],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
        ],
        dataY:[
            {pinkText:'GAME'},
            {pinkText:'FOOTBALL'},
            {pinkText:'PINGPONG'},
            {pinkText:'BADMINTON'},
        ]
    },
    headtitle:"Sports and Race",
    eye_positionLeft:"30",
    eye_positionTop:"40",
    positionTop:"-560",
    positionLeft:"1550"
}

const seaTableTurtle = {
    data:{
        dataX:[
            {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122,},    
            {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
            {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
            {text:'ADVANCED',trues:[false,false,false,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
            {text:'EXPERT',trues:[false,false,false,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
        ],
        dataY:[
            {pinkText:'FACE'},
            {pinkText:'HEIGHT'},
            {pinkText:'WEIGHT'},
            {pinkText:'EMOTION'},
        ]
    },
    headtitle:"Evaluation Myself",
    eye_positionLeft:"3",
    eye_positionTop:"27",
    positionTop:"-1090",
    positionLeft:"2750"
}
const seaTableItemConfig = [seaTableFish,seaTableCrab,seaTableTurtle]
    

const bannerConfig = [
    {type:"1",positionBottom:"4600",title:'Dec 1997',context:'I born'},
    {type:"2",positionBottom:"5000",title:'Mar 2013',context:'Make monery frist time'},    
    {type:"1",positionBottom:"5400",title:'Feb 2016',context:'Meet the person which i love'},
    {type:"2",positionBottom:"5800",title:'Aug 2017',context:'Passed CET-4'},
    {type:"1",positionBottom:"6200",title:'Jun 2019',context:'Finish university'},
    {type:"2",positionBottom:"6600",title:'Jun 2019',context:'Work frist time'},
    {type:"1",positionBottom:"7000",title:'Mar 2021',context:'Go to guangzhou'},
    {type:"2",positionBottom:"7400",title:'Nove 2021',context:'Make this web'},
]

const gatesConfig = [
    {
        positionLeft:"7000",
        title:"LEVEL2"
    },
    {
        positionLeft:"1800" ,
        title:"LEVEL1"
    },
    {
        positionLeft:"11420",
        positionBottom:"170",
        title:"LEVEL3"
    },
    {
        positionLeft:"15920",
        positionBottom:"170",
        title:"LEVEL4"
    }
]

const treesConfig = [
    {
        type:"b",
        positionLeft:"40"
    },
   {
        type:"c",
        positionLeft:"750"
    },
    {
        type:"e",
        positionLeft:"900"
    },
    {
        type:"d",
        positionLeft:"2350"
    },
    {
        type:"b",
        positionLeft:"2200"
    },
    {
        type:"a",
        positionLeft:"2300"
    },
]

const buildsConfig = [
    {
        positionLeft:"4100", 
        type:"a"
    },
    {
        positionLeft:"4400", 
        type:"b"
    },
    {
        positionLeft:"4750", 
        type:"c"
    },
]

const cloudsConfig = [
    {
        positionLeft:"200",
        positionTop:"40"
    },
    {
        positionLeft:"750",
        positionTop:"100"
    },
    {
        positionLeft:"1750",
        positionTop:"100"
    },
    {
        positionLeft:"1250",
        positionTop:"90"
    },
    {
        positionLeft:"5650",
        positionTop:"60"
    },
    {
        positionLeft:"5350",
        positionTop:"50"
    },
   
]

const deepwatersConfig = [
    {
        type:"1",
        positionLeft:"300" ,
        positionTop:"400"
    },
    {
        type:"1",
        positionLeft:"2200" ,
        positionTop:"320"
    },
    {
        type:"2",
        positionLeft:"800" ,
        positionTop:"180"
    },
    {
        type:"2",
        positionLeft:"2670" ,
        positionTop:"220"
    },
]

const algaesConfig = [
    {
        type:"1",

    },
    {
        type:"2",
        positionLeft:"1050"
    },
    {
        type:"1",
        positionLeft:"3100"
    },
    {
        type:"2",
        positionLeft:"3200"
    },
]

const boxsConfig = [
    {
        positionLeft:"11920",
        type:"1"
    },
    {
        positionLeft:"13520",
        type:"2"
    },
    {
        positionLeft:"15220",
        type:"2"
    },
]
const skycloudConfig = [
    {
        positionLeft:"750",
        positionTop:"-2000"
    },
    {
        positionLeft:"950",
        positionTop:"-2300"
    },
    {
        positionLeft:"750",
        positionTop:"-2600"
    },
    {
        positionLeft:"1350",
        positionTop:"-2900"
    },


]

export function useConfig(){
    return {
        skycloudConfig,bannerConfig,seaTableItemConfig,gatesConfig,treesConfig,buildsConfig,cloudsConfig,deepwatersConfig,algaesConfig,boxsConfig
    }
}