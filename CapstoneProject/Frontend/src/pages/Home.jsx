import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Restaurants from '../components/Restaurants'
import { useDispatch } from 'react-redux'
import axios from '../utils/axios'

function Home() {
  const [restaurantData, setRestaurantData] = useState(false)
  const dispatch = useDispatch()

  const getRestaurantDetails = async()=>{

    try {
      let {data} = await axios.get('/api/restaurants')
      console.log(data)
      dispatch({type:'SET_RESTAURANTS',payload:data.restaurants})
      setRestaurantData(restaurantData)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getRestaurantDetails()
  },[])


  return (
    <div>
      <div className="restaurant-details">
        {!restaurantData && <Spinner/>}
        {restaurantData &&<Restaurants/>}
      </div>
    </div>

  )
}

export default Home