import React from 'react'
import SearchContainer from './SearchContainer'
import Images from './Images'

import "./Home.scss"
const Home = () => {
  return (
    <div className='Home' >
        <SearchContainer/>
        <Images />
    </div>
  )
}

export default Home