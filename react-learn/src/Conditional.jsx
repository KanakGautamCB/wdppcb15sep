import { useState } from "react"



const Conditional = ()=>{

    const [visible,setVisible]=useState(true)

    const toggleVisible = () =>{
        setVisible(!visible)
    }

    return(
        <div>
            {visible && <p>I am visible</p>}
            <button onClick={toggleVisible}>Toggle</button>
        </div>
    )
}

export default Conditional;