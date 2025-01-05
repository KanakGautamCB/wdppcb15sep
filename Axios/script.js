const url = 'https://potterapi-fedeperin.vercel.app' ;

// axios.get(url)
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

async function getData(){

    try {
        const data = await axios.get(url)
        console.log(data.data.message)
    } catch (error) {
        console.log(error)
    }

}

getData()