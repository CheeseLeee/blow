export function getEquipment(){
    const winWidth = window.innerWidth;
    console.log('winWidth',winWidth)
    if(winWidth > 365){
        return true
    }else{
        return false
    }
}

export function animate(animateEle:HTMLElement){
    let count = 0 
    setInterval(() => {
        animateEle.style.backgroundPosition =  -200 * count + "px " + 0 + 'px' // “px " 一定要空格是:200px 0px 中间有空格
        count++
    },500)
}