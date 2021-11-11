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

export function scrollYto(scrollY:any){
    const a = scrollY  / 1000 * (-1060)
    return a
}


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

export function animate(animateEle:HTMLElement,towards:any = 'right',countX = 1){  //有待优化~
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

let upKey = true
export function animateTowardUp(animateEle:HTMLElement,type:any){
    if(!upKey) return
    if(type === 'right'){
        const count = 7

        animateEle.style.backgroundPosition =  -200 * count + "px " + 0 + 'px'
        animateEle.style.transform = `translateY(${-180}px)` 
        setTimeout(() => {
            //animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
            animateEle.style.transform = `translateY(${-80}px)` 
            upKey = false
            downKey= true
        },200)
/*          let jump:any = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * count + "px " + 0 + 'px'
            animateEle.style.transform = `translateY(${-180}px)`        
            if(count === 0){
                clearInterval(jump)
                jump = null
            }
            count = 0
            upKey = false
            downKey= true
        },200) */ 
    }
    if(type === 'left'){
        const count = 7
        animateEle.style.backgroundPosition =  -200 * count + "px " + -200 + 'px'
        animateEle.style.transform = `translateY(${-180}px)` 
        setTimeout(() => {
            animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
            animateEle.style.transform = `translateY(${-80}px)` 
            upKey = false
            downKey= true
        },200)       
    }

}
let downKey = true
export function animateTowardDown(animateEle:HTMLElement,type:any){
    if(!downKey) return
    if(type === 'right'){
        let count = 6
        let jump:any = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * count + "px " + 0 + 'px'
            animateEle.style.transform = `translateY(${0}px)`
            if(count === 0){
                clearInterval(jump)
                jump = null
            }
            count = 0
            downKey = false
            upKey = true
        },200)
    }
    if(type === 'left'){
        let count = 6
        let jump:any = setInterval(() => {
            animateEle.style.backgroundPosition =  -200 * count + "px " + -200 + 'px'
            animateEle.style.transform = `translateY(${0}px)`
            if(count === 0){
                clearInterval(jump)
                jump = null
            }
            count = 0
            downKey = false
            upKey = true
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

