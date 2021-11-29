import { ref,reactive ,nextTick, Ref} from 'vue'
import { useRouter } from 'vue-router'
interface iControllerValue {
  value:string,
  children:string[]
}

export function useHandleOrder(){
  const Router = useRouter()
    const controllerValue:iControllerValue = reactive({
        value:'',
        children:[]
      })
      const userOrderDom_ref = ref<HTMLElement | null>(null)
      const homebodyScorllDom_ref = ref<HTMLElement | null>(null)
      const userOrders:iControllerValue[] = reactive([])
      let hisControllerValue:string[] = reactive([])
      const hisIndex = ref(0)
      document.onkeydown = function(e):void{
        if(e.keyCode === 13){
          if(controllerValue.value === ''){
            return 
          }
          userOrders.push({...controllerValue})
          hisControllerValue.push(controllerValue.value)    
          switch(controllerValue.value){
            case '--help':
              console.log('right')
              controllerValue.children.push('-- start:开始','-- end:undefined','-- clear:清理掉操作信息','-- deepclear:清理掉操作历史栈及信息','-- author:作者信息')   
              break
            case '--start':
              Router.push({
                name:'Main'
              })
              break
            case '--end':
              controllerValue.children.push('I haven not figured out what to do')
              break
            case '--clear':
              userOrders.length = 0
              break
            case '--deepclear':
               hisIndex.value = 0
               hisControllerValue = []
              break
            case '--author':
              controllerValue.children.push('Name:lzx,Born:1997-12-05,University:undefiend')
              break
            default:
              console.log('not found')
          }
          nextTick(() => {
            let scorllHeight:number
            if(userOrderDom_ref.value){
              scorllHeight = userOrderDom_ref.value.clientHeight
              if(homebodyScorllDom_ref.value){
                homebodyScorllDom_ref.value.scrollTop = scorllHeight
              } 
            }
          })
          controllerValue.value = ''
          controllerValue.children = []
        }else if(e.keyCode === 38){
          console.log(hisControllerValue[hisIndex.value])
          if(hisControllerValue[hisIndex.value] === undefined){
            controllerValue.value = hisControllerValue[hisIndex.value - 1]      
          }else{
            controllerValue.value = hisControllerValue[hisIndex.value]
            hisIndex.value++
          }     
        }
      }
      return {
        controllerValue,
        userOrders,
        hisControllerValue,
        hisIndex,
        homebodyScorllDom_ref,
        userOrderDom_ref
        
      }
} 

export function useTips(){
  const isTextOver = ref(true)
  const spansMap = [
    '<div id='," 'app' ",'>',
    " Hi , Am i , The writre of page , because the author is very pround and impatient , So , it's just a ",
    " development version ",
    " which now you can see the view , even only 10% complete .  But the author is still happy and hope you have a great experience . if you have some ideas then you can call me at frist , Then are you readly?   ",
    '</div>'
  ]
  const spansMapInnerHTML:string[] = reactive([])  

  function createTypeStark(typeMap:string[],contextInnerHTML:string[],index = 0){
    let context = ''
    let arrIndex = 0
    const spanWord_timer = setInterval(() => {      
      context += typeMap[index][arrIndex] 
      arrIndex++      
      
      contextInnerHTML[index] = context
      if(contextInnerHTML[index].length ===  typeMap[index].length){
        clearInterval(spanWord_timer)
        index++
        if(index !== typeMap.length){
          createTypeStark(typeMap,contextInnerHTML,index)
        }else{
          // over then to do
          isTextOver.value = false
          console.log(spansMap)
        }
      }
    }, 80)
  }
  createTypeStark(spansMap,spansMapInnerHTML)
  const winWidth = window.innerWidth 
  const isPc_view = winWidth >= 414 ? true : false
  const isDialogVisibleSession = sessionStorage.getItem('isDialogVisible') || !isPc_view ? ref(false) : ref(true)
  const isDialogVisible = isDialogVisibleSession 
  console.log(isDialogVisible)
    function handleisDialogVisible():void{
    isDialogVisible.value = false
    sessionStorage.setItem('isDialogVisible','true')
  }
  return {
    isTextOver,spansMapInnerHTML,handleisDialogVisible,isDialogVisible
  }
}

