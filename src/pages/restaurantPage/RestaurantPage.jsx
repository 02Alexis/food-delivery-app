import React from 'react'
import Dishes from '../../components/dishes/Dishes'
import InfoRestaurant from '../../components/infoRestaurant/InfoRestaurant';
import FilterButton from '../../components/filterButton/FilterButton';
import "./RestaurantPage.scss"

function RestaurantPage() {
  return (
    <div className='restaurantPage'>
    <InfoRestaurant />
    <FilterButton />
    <Dishes />
    </div>
  )
}

export default RestaurantPage