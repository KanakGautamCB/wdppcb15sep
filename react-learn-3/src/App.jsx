import { useState } from "react";
import { memo } from 'react';

const App = () =>{

    return (
        <div> 
        <Text data="Bonjour"></Text>
        <Text data="Arrigato"></Text>
        <Text1/>
        </div>
    )
}

// const Text = memo((props) =>{
//     console.log(props.data)
//     return (
//         <p>{props.data}</p>
//     )
// })

const Text = (props) =>{
    console.log(props.data)
    return (
        <p>{props.data}</p>
    )
}

const Text1 = () =>{
    const [cnt, setCnt] = useState(0)
    const incCount = () =>{
        setCnt(cnt+1)
    }
    return (
        <>
        <button onClick={incCount}>Increase Cnt</button>
        <p>{cnt}</p>
        </>
        
    )
}



export default App