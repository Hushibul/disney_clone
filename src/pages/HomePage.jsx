import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import MiniCard from '../components/MiniCard'
import MainContent from '../components/MainContent'
import ContentTitle from '../components/ContentTitle'

import banner from '../data/banner'
import minicards from '../data/minicard'
import movies from '../data/movie'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div className='homepage'>
        <Navbar />
        <Slider banner={banner} />
        <MiniCard cards={minicards}/>
        <ContentTitle title='Recommneded for You'/>
        <MainContent movies={movies.recommened}/>
        <ContentTitle title='New to Disney+'/>
        <MainContent movies={movies.new}/>
        <ContentTitle title='Originals'/>
        <MainContent movies={movies.originals}/>
        <ContentTitle title='Trending'/>
        <MainContent movies={movies.trending}/>
        <Footer />
    </div>
  )
}

export default HomePage