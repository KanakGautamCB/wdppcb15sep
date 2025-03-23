const initialState = {color:'black'}

export default function colorReducer(state=initialState,action){
    switch(action.type){
        case "change/red":
            return {color:'red'}
        case "change/blue":
            return {color:'blue'}
        case "change/green":
            return {color:'green'}
        default:
            return state
    }
}