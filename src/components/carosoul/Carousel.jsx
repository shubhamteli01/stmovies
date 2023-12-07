import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import './carousel.css'
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import MovieCard from '../movieCard/MovieCard';
import PosterFallback from "../../assets/no-poster.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Carousel1({ data, loading, mediaType }) {
    const carouselContainer = useRef(null);
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const { url } = useSelector((state) => state.home)
    console.log(data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 767, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1, // Number of slides for mobile screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 3, // Number of slides for mobile screens
                    slidesToScroll: 3,
                },
            },
        ],
    };
    const skItem = () => {
        return (

            <div className='carouselItem1'>
                <div className='carouselImage1'>
                </div>
                <div className='circularRating'>
                </div>
                <div className='carouselItemTitle1'></div>

                <div className='carouselItemDate1'></div>
            </div>



        );
    };
    return (
        <div className='carousel'>
            <ContentWrapper>
                {!false ? (
                    <Slider {...settings} className='slider'>
                        {data !== undefined ? (
                            data?.map((item) => {
                                const imagePath = item.poster_path ? url.backdrop + item.poster_path : PosterFallback;

                                return (
                                    <MovieCard item={item} mediaType={mediaType}></MovieCard>
                                )

                            }))
                            : <div style={{ color: 'white', border: '1px solid red', width: '100%', height: '15vh' }}>carouselImage1
                            </div>

                        }
                    </Slider>
                ) : (
                    <>
                        <div className='loadingSkeleton'>
                            <div className='carouselItem1'>
                                <div className='carouselImage1'>
                                </div>
                                <div className='circularRating'>
                                </div>
                                <div className='carouselItemTitle1'></div>

                                <div className='carouselItemDate1'></div>
                            </div>
                            <div className='carouselItem1'>
                                <div className='carouselImage1'>
                                </div>
                                <div className='circularRating'>
                                </div>
                                <div className='carouselItemTitle1'></div>

                                <div className='carouselItemDate1'></div>
                            </div>
                            <div className='carouselItem1'>
                                <div className='carouselImage1'>
                                </div>
                                <div className='circularRating'>
                                </div>
                                <div className='carouselItemTitle1'></div>

                                <div className='carouselItemDate1'></div>
                            </div>
                            <div className='carouselItem1'>
                                <div className='carouselImage1'>
                                </div>
                                <div className='circularRating'>
                                </div>
                                <div className='carouselItemTitle1'></div>

                                <div className='carouselItemDate1'></div>
                            </div>
                            <div className='carouselItem1'>
                                <div className='carouselImage1'>
                                </div>
                                <div className='circularRating'>
                                </div>
                                <div className='carouselItemTitle1'></div>

                                <div className='carouselItemDate1'></div>
                            </div>
                        </div>

                    </>

                )

                }
            </ContentWrapper>


        </div>
    )
}

export default Carousel1

