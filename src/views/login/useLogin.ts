import { ref,reactive } from 'vue'
export function useHandleOrder(){
    const controllerValue:any = reactive({
        value:'',
        children:[]
      })
      const userOrders:any = reactive([])
      let hisControllerValue:any = reactive([])
      const hisIndex = ref(0)
      document.onkeydown = function(e:any):void{
        if(e.keyCode === 13){
          if(controllerValue.value === ''){
            return 
          }
          userOrders.push({...controllerValue})
          hisControllerValue.push(controllerValue.value)    
          switch(controllerValue.value){
            case '-- help':
              console.log('right')
              controllerValue.children.push('-- start:开始','-- end:undefined','-- clear:清理掉操作信息','-- deepclear:清理掉操作历史栈及信息','-- author:作者信息')   
              break
            case '-- end':
              controllerValue.children.push('I haven not figured out what to do')
              break
            case '-- clear':
              userOrders.length = 0
              break
            case '-- deepclear':
               hisIndex.value = 0
               hisControllerValue = []
              break
            case '-- author':
              controllerValue.children.push('Name:lzx,Born:1997-12-05,University:undefiend')
              break
            default:
              console.log('not found')
          }
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

}