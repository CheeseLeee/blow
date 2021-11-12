export class Animate {
    public step:(towards:string) => void
    constructor(animateEle:HTMLElement){
        let stepTimer_right:any
        let stepTimer_left:any
        //X轴位移函数
        this.step = function (towards){
            let countX = 1
            if(towards === 'right'){
                 //case 右移定时器（动画未执行完）
                if(stepTimer_right) return
                clearInterval(stepTimer_left)
                stepTimer_left = null
                animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                stepTimer_right = setInterval(() => {
                    animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px'
                    countX++
                    if(countX === 3){           
                        clearInterval(stepTimer_right)
                        stepTimer_right = null
                        setTimeout(() => {
                            animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                        },200)
                    }
                },200)
            }
            if(towards === 'left'){
                //case 左移定时器（动画未执行完）
                if(stepTimer_left) return 
                clearInterval(stepTimer_right)
                stepTimer_right = null
                let countX = 1                
                animateEle.style.backgroundPosition =  0 + "px " + -200 + 'px'
                stepTimer_left = setInterval(() => {                    
                    animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
                    countX++
                    if(countX === 3){           
                        clearInterval(stepTimer_left)
                        stepTimer_left = null
                        setTimeout(() => {
                            animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                        },200)
                    }
                },200)
            }
            
        }
    }
}
