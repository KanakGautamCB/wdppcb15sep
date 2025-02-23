
import { useState } from "react"

function useMyState (initialValue){

    const [cnt,setCnt] = useState(initialValue)
    //const [cnt2,setCnt2]= useState(initialValue)

    const customSetCnt = (value) =>{
        console.log(value)
        setCnt(value)
    }

    return [cnt,customSetCnt]
    //return [cnt,setCnt, cnt2, setCnt2]
}

export {useMyState}