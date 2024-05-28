const wordsSplit= (newVal:string,oldnewVal:string,by:string,splitAfter:number,maxLength:number) => {
    if(newVal.length < oldnewVal.length &&  oldnewVal[oldnewVal.length-1]==by) {
        return newVal.substring(0,newVal.length-1)
    }else if(oldnewVal.length == maxLength){
        return oldnewVal
    }
    else{
        let result = ""
        let temp = newVal.replaceAll(by,"")
        for (let index = 0; index < temp.length; index++) {
            const element = temp[index];
            result += element
            if( (index+1) % splitAfter == 0 &&  index+1 !== temp.length)result += by
        }
        return result
    }
}

export {wordsSplit}