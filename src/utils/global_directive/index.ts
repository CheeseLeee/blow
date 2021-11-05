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
    }
]

