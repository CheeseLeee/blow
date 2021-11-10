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
//let stepTimerto_left:any = null
let stepTimerto_right:any 
let stepTimerto_left:any

export function animate(animateEle:HTMLElement,towards:any = 'right',countX = 1){ 
    if(towards === 'left'){
        if(stepTimerto_left) return
        clearInterval(stepTimerto_right)
        stepTimerto_right = null
        animateEle.style.backgroundPosition =  0 + "px " + -200 + 'px'
        stepTimerto_left = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_left)
                stepTimerto_left = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                },200)
            }
        },200)
    }
    if(towards === 'right'){
        if(stepTimerto_right) return
        clearInterval(stepTimerto_left)
        stepTimerto_left = null
        animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
        stepTimerto_right = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_right)
                stepTimerto_right = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                },200)
            }
        },200)
    }
}

/*
export function animate(animateEle:HTMLElement,towards:any = 'right',countX = 1){ 
    if(towards === 'left'){
        if(stepTimerto_left) return
        clearInterval(stepTimerto_right)
        stepTimerto_right = null
        animateEle.style.backgroundPosition =  0 + "px " + -200 + 'px'
        stepTimerto_left = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_left)
                stepTimerto_left = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                },200)
            }
        },200)
    }
    if(towards === 'right'){
        if(stepTimerto_right) return
        clearInterval(stepTimerto_left)
        stepTimerto_left = null
        animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
        stepTimerto_right = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px'
            countX++
            if(countX === 3){           
                clearInterval(stepTimerto_right)
                stepTimerto_right = null
                setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                },200)
            }
        },200)
    }
}*/

