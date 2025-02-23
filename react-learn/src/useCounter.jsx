import { useState } from "react"

function useCounter(value){
    const [cnt,setCnt] = useState(value)

    function increaseCounter(){
        setCnt(cnt+1)
    }

    function decreaseCounter(){
        setCnt(cnt-1)
    }

    return {cnt,increaseCounter,decreaseCounter}
}

export {useCounter}