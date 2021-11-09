export function getEquipment(){
    const winWidth = window.innerWidth;
    console.log('winWidth',winWidth)
    if(winWidth > 365){
        return true
    }else{
        return false
    }
}

let beforeScrollTop =  document.documentElement.scrollTop || document.body.scrollTop

export function scorllToward(afterScrollTop:any){
    let t 
    const delta = afterScrollTop - beforeScrollTop
    delta > 0 ? t = true : t = false
    beforeScrollTop = afterScrollTop
    return {
        t
    } //true === down ; false === up
}
//let scrollTimer:any = null
let stepTimer:any 
let scrollTimer:any
let count = 1
export function animate(animateEle:HTMLElement){ 
    if(stepTimer) return
    stepTimer = setInterval(() => {
        animateEle.style.backgroundPosition =  -200 * count + "px " + 0 + 'px'
        count++
        if(count === 3){
            count = 1
            clearInterval(stepTimer)
            stepTimer = null
        }
    },200)
/*     if(!stepTimer){

        let count = 1
        animateEle.style.backgroundPosition =   0 + "px " + 0 + 'px'                     
        stepTimer = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * count + "px " + 0 + 'px' // "px " 一定要空格是:200px 0px 中间有空格
            count++
            if(count === 3){               
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                    clearInterval(stepTimer)
                    stepTimer = null
                    
                },200)
            }
        },200)
    }
    if(stepTimer){   
        console.log('c')
    }  */

}

/* export function animate(animateEle:HTMLElement,toWards:any,countX:any,countY?:any){ 
    if(toWards === 'right'){
        console.log('right')
        clearInterval(stepTimer)     
        animateEle.style.backgroundPosition =   0 + "px " + 0 + 'px'                     
        stepTimer = setInterval(() => {
            //
            animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px' // "px " 一定要空格是:200px 0px 中间有空格
            countX++
            if(countX === 3){
                clearInterval(stepTimer)
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                },100)
            }
        },200)
    }else if(toWards === 'left'){
        console.log('left')
        clearInterval(stepTimer)
        animateEle.style.backgroundPosition =   0 + "px " + -200 + 'px'
            
     
        stepTimer= setInterval(() => {
            //
            animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px' // "px " 一定要空格是:200px 0px 中间有空格
            countX++
            if(countX === 3){
                clearInterval(stepTimer)
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  0 + "px " + -200 + 'px'
                },100)
            }
        },200)
    }

} */

