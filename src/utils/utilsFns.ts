export function getEquipment(){
    const winWidth = window.innerWidth;
    console.log('winWidth',winWidth)
    if(winWidth > 365){
        return true
    }else{
        return false
    }
}