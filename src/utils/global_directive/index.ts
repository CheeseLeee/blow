interface iBindParams {
    value:string | number
}
interface globalDirective {
    name:string,
    cycle:{
        beforeMount?:(el:HTMLElement,...params:any[]) => void
        mounted?:(el:HTMLElement,...params:any[]) => void,
        beforeUnmount?:() => void
    }
}
export const globalDirectives:globalDirective[] = [
    //默认获取焦点
    {
        name:'focus',//
        cycle:{
            mounted(el:HTMLElement){
                el.focus()
            }
        }
    },
    //修改夜间背景图
    {
        name:'bgi',
        cycle:{
            mounted(el:HTMLElement,imgUrl:iBindParams){
                const myDate = new Date()
                const nowHours = myDate.getHours()
                if(nowHours >= 20){
                    //传入参数imgUrl必须是/assets下的png格式图片
                    el.style.backgroundImage = `url(${require('@/assets/'+imgUrl.value+'.png')})` 
                }
            }
        }
    },
    //移动端show
    {
        name:'mobileView',
        cycle:{
            beforeMount(el:HTMLElement){
                const winWidth = window.innerWidth;
                if(winWidth > 415){
                    el.style.display = 'none'
                    return true
                }else{
                    el.style.display = 'block'
                    return false
                }
            }
        }
    },
    //pc show
    {
        name:'isPc',
        cycle:{
            beforeMount(el:HTMLElement){
                console.log('eee',el)
                const winWidth = window.innerWidth;
                console.log('wwww',winWidth)
                if(winWidth > 415){
                    el.style.display = 'block'
                    return true
                }else{
                    el.style.display = 'none'
                    return false
                }
            }
        }
    },
    //X轴隐藏过度动画
    {
        name:'moveAnimate',
        cycle:{
            mounted(el:HTMLElement,scrollValue:any){
                const winWidthHelf = window.innerWidth / 2
                const animateEl = document.getElementById('animate') as HTMLElement
                window.addEventListener('scroll', handleScroll)
                el.style.transform = `translateX(300px)`
                el.style.transition = `transform 2s easy-in`
                function handleScroll(){
                    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
                    const animatePoint = scrollValue.value - animateEl.offsetLeft  - 220 - winWidthHelf + 100
                    if(scrollHeight > animatePoint){
                        el.style.transform = `translateX(0)`
                        window.removeEventListener('scroll', handleScroll)
                    }
                }
            }
        }
    },
    //Y轴隐藏过度动画
    {
        name:'moveAnimateY',
        cycle:{
            mounted(el:HTMLElement,scrollValue:any){
                console.log(scrollValue.value ,'vvv')
                const winWidthHelf = window.innerWidth / 2
                const animateEl = document.getElementById('animate') as HTMLElement
                window.addEventListener('scroll', handleScroll)
                el.style.transform = `translateY(-300px)`
                el.style.transition = `transform 2s easy-in`
                function handleScroll(){
                    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
                    const animatePoint = scrollValue.value - animateEl.offsetLeft  - 220 - winWidthHelf + 100
                    console.log(animatePoint,'888')
                    if(scrollHeight > animatePoint){
                        el.style.transform = `translateY(0)`
                        window.removeEventListener('scroll', handleScroll)
                    }
                }
            }
        }
    },
]

