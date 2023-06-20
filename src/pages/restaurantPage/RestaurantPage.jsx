import React from 'react'
import Dishes from '../../components/dishes/Dishes'
import InfoRestaurant from '../../components/infoRestaurant/InfoRestaurant';
import FilterButton from '../../components/filterButton/FilterButton';

function RestaurantPage() {
  return (
    <>
    <InfoRestaurant />
    <FilterButton />
    <Dishes />
    </>
  )
}

export default RestaurantPage