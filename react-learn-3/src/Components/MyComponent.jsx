const MyComponent = ({children}) =>{
    console.log(children)
    return (
        <div>
            {children[0]}
            <hr/>
            {children[1]}
        </div>
    )
}

export default MyComponent