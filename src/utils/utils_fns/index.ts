export function getEquipment():boolean{
    const winWidth = window.innerWidth;
    console.log('winWidth',winWidth)
    if(winWidth > 365){
        return true
    }else{
        return false
    }
}

export function getRandomInt(min:number,max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let beforeScrollTop =  document.documentElement.scrollTop || document.body.scrollTop
export function scorllToward(afterScrollTop:number):{[t:string]:boolean}{
    let t 
    const delta = afterScrollTop - beforeScrollTop
    delta > 0 ? t = true : t = false
    beforeScrollTop = afterScrollTop
    return {
        t
    } //true === down ; false === up
}

