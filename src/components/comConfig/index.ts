const itemsY1 = [
    {pinkText:'JAVASCRIPT'},
    {pinkText:'HTML'},
    {pinkText:'CSS'},
    {pinkText:'VUE'}
]
 const itemsX1 = [
    {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},     
    {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},
    {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},
    {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},
    {text:'EXPERT',trues:[false,false,false,false],src:require('../../assets/main/sea/fish.png'),eyes:require('../../assets/main/sea/fish-eyes.png'),animatetoPosition:15912},
]
const itemsY2 = [
    {pinkText:'GAME'},
    {pinkText:'FOOTBALL'},
    {pinkText:'PINGPONG'},
    {pinkText:'BADMINTON'},
]
const itemsX2 = [
    {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},     
    {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
    {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
    {text:'ADVANCED',trues:[true,false,false,true],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
    {text:'EXPERT',trues:[true,false,false,false],src:require('../../assets/main/sea/crab.png'),eyes:require('../../assets/main/sea/crab-eyes.png'),animatetoPosition:17985},
]
const itemsY3 = [
    {pinkText:'FACE'},
    {pinkText:'HEIGHT'},
    {pinkText:'WEIGHT'},
    {pinkText:'EMOTION'},
]
const itemsX3 = [
    {text:'BEGINNER',trues:[true,true,true,true], src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122,},    
    {text:'ELEMENTARY',trues:[true,true,true,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
    {text:'INTERMEDIATE',trues:[true,true,true,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
    {text:'ADVANCED',trues:[false,false,false,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
    {text:'EXPERT',trues:[false,false,false,true],src:require('../../assets/main/sea/turtle.png'),eyes:require('../../assets/main/sea/turtle-eyes.png'),animatetoPosition:20122},
] 

const all = {
    itemsY1,itemsX1,itemsY2,itemsX2,itemsY3,itemsX3
}

export function useConfig(){
    return all
}

const bannerConfig = [
    {type:"1",positionBottom:"1600",title:'Dec 1997',context:'I born'},
    {type:"2",positionBottom:"2000",title:'Mar 2013',context:'Make monery frist time'},    
    {type:"1",positionBottom:"2400",title:'Feb 2016',context:'Meet the person which i love'},
    {type:"2",positionBottom:"2800",title:'Aug 2017',context:'Passed CET-4'},
    {type:"1",positionBottom:"3200",title:'Jun 2019',context:'Finish university'},
    {type:"2",positionBottom:"3600",title:'Jun 2019',context:'Work frist time'},
    {type:"1",positionBottom:"4000",title:'Mar 2021',context:'Go to guangzhou'},
    {type:"2",positionBottom:"4400",title:'Nove 2021',context:'Make this web'},
]


export function useBannerConfig(){
    return {bannerConfig}
}

