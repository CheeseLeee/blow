export class Animate {
    public run:(towards:string) => void
    public jumpUp:(towards:string) => void
    public jumpDown:(towards:string) => void
    public swim:(towards:string) => void
    public clearRunStark:() => void
    public clearJumpStark:() => void
    public clearSwimStark:() => void
    constructor(animateEle:HTMLElement){
        let runTimer_right:NodeJS.Timer | null
        let runTimer_left:NodeJS.Timer | null
        let jumpUpKey = true
        let notRunKey = false
        let jumpTimer_right:NodeJS.Timer | null = null
        let jumpTimer_left:NodeJS.Timer | null = null
        let jumpDownKey = true
        let swimTimerRight:NodeJS.Timer | null = null
        let swimTimerLeft:NodeJS.Timer | null = null
 
        this.clearRunStark = () => {
            clearInterval(Number(runTimer_right))
            runTimer_right = null
            clearInterval(Number(runTimer_left))
            runTimer_left = null        
        }
        this.clearJumpStark = () => {
            clearTimeout(Number(jumpTimer_right))
            clearTimeout(Number(jumpTimer_left))
            jumpTimer_left = null
            jumpTimer_right = null
            notRunKey = false
        }
        this.clearSwimStark = () => {
            clearInterval(Number(swimTimerRight))
            clearInterval(Number(swimTimerLeft))
            swimTimerRight = null
            swimTimerLeft = null
        }
        //X轴位移函数
        this.run = function (towards){
            this.clearSwimStark()
            //console.log('run',notRunKey)
            if(notRunKey) return
            let countX = 1
            //console.log('run')
            if(towards === 'right'){
                 //case 右移定时器（动画未执行完）
                if(runTimer_right) return
                clearInterval(Number(runTimer_left))
                runTimer_left = null
                animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                runTimer_right = setInterval(() => {
                    animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px'
                    countX++
                    if(countX === 3){           
                        clearInterval(Number(runTimer_right))
                        runTimer_right = null
                        setTimeout(() => {
                            animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                        },200)
                    }
                },200)
            }
            if(towards === 'left'){
                //case 左移定时器（动画未执行完）
                if(runTimer_left) return 
                clearInterval(Number(runTimer_right))
                runTimer_right = null
                let countX = 1                
                animateEle.style.backgroundPosition =  0 + "px " + -200 + 'px'
                runTimer_left = setInterval(() => {                    
                    animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
                    countX++
                    if(countX === 3){           
                        clearInterval(Number(runTimer_left))
                        runTimer_left = null
                        setTimeout(() => {
                            animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                        },200)
                    }
                },200)  
            }
            
        }
        //jump
        this.jumpUp = function(towards:string){   
            console.log(jumpUpKey,'jumpupkey')         
            if(!jumpUpKey) return
            this.clearRunStark()
            notRunKey = true
            jumpUpKey = false    
            jumpDownKey = true   
            animateEle.style.transform = `translateY(-220px)` 
 
            if(towards === 'right'){
                animateEle.style.backgroundPosition =  -200 * 7 + "px " + 0 + 'px'                
                jumpTimer_right = setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                   // console.log(scrollHeight,'ccc')
                    animateEle.style.transform = `translateY(-80px)`                                    
                    notRunKey = false                  
                },500)
            }
            if(towards === 'left'){               
                animateEle.style.backgroundPosition =  -200 * 7 + "px " + -200 + 'px'
                jumpTimer_left = setTimeout(() => {
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                    animateEle.style.transform = `translateY(-80px)`                       
                    notRunKey = false
                   
                },500)  
            }
        }
        this.jumpDown = function(towards){
            this.clearJumpStark()
            //console.log('jumpDownKey',jumpDownKey)
            if(!jumpDownKey) return
            jumpDownKey = false
            animateEle.style.transform = `translateY(-0px)`
            this.clearRunStark()            
            if(towards === 'right'){               
                animateEle.style.backgroundPosition =  -200 * 7 + "px " + 0 + 'px'
                setTimeout(() => {            
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + 0 + 'px'
                    //jumpDownKey = true
                    jumpUpKey = true
                },300)
            }
            if(towards === 'left'){
                animateEle.style.backgroundPosition =  -200 * 7 + "px " + -200 + 'px'
                setTimeout(() => {            
                    animateEle.style.backgroundPosition =  -200 * 0 + "px " + -200 + 'px'
                    //jumpDownKey = true
                    jumpUpKey = true
                },300)               
            }
        }
        //swim
        this.swim = function(towards){
            this.clearRunStark()
            let countX = 3 
            if(towards === 'right'){     
                if(swimTimerRight) return  
                animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px' 
                clearInterval(Number(swimTimerLeft))
                swimTimerLeft = null         
                swimTimerRight = setInterval(() => {
                    animateEle.style.backgroundPosition =  -200 * countX + "px " + 0 + 'px'
                    countX++
                    if(countX === 6){
                        clearInterval(Number(swimTimerRight))
                        swimTimerRight = null 
                        countX = 3
                       
                    }
                },200)
            }
            if(towards === 'left'){
                if(swimTimerLeft) return
                animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
                clearInterval(Number(swimTimerRight))
                swimTimerRight = null 
                swimTimerLeft = setInterval(() => {
                    animateEle.style.backgroundPosition =  -200 * countX + "px " + -200 + 'px'
                    countX++
                    if(countX === 6){
                        clearInterval(Number(swimTimerLeft))
                        swimTimerLeft = null 
                        countX = 3
            
                    }
                },200)               
            }
        }
    }
}
