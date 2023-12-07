import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from '../../components/trending/Trending'
import './home.css'
import Popular from '../../components/popular/Popular'
import Header from '../../components/header/Header'
import CircularRating from '../../components/circularRating/CircularRating'
import Footer from '../../components/footer/Footer'
import TopRated from '../../components/topRated/TopRated'
function Home() {
    return (
        <>
            <div className='homePage'>
                <HeroBanner></HeroBanner>
                <Trending></Trending>
                <Popular></Popular>
                <TopRated></TopRated>
            </div>


        </>


    )
}

export default Home