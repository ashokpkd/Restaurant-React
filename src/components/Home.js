import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import CardComponents from './CardComponents'
import { listRestaurants} from '../action/restaurantAction'
import {useDispatch, useSelector} from 'react-redux'
function Home() {
 const  dispatch = useDispatch()

 const restaurantData= useSelector(state=>state.restaurantReducer)

 const {restaurants}= restaurantData
    useEffect(() => {
      dispatch(listRestaurants())
      
    }, [])
    console.log("my data is",restaurants)

  return (
    <Row>

{restaurants.map(item=>(
    <Col sm={12} md={8} lg={6} xl={3}>
        <CardComponents item={item}/>
    </Col>
))}
    </Row>
  )
}

export default Home
