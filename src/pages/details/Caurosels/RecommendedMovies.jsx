import React from 'react'
import UseFetch from '../../../hooks/UseFetch';
import Carousel from '../../../components/carosoul/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import './similear.css'
const RecommendedMovies = ({ mediaType, id }) => {
    console.log(mediaType)

    const { data } = UseFetch(`${mediaType}/${id}/recommendations`);
    console.log(data)

    return (
        <div className='simileardiv'>
            <div className='couroselTitle'>Recommended {mediaType === 'movie' ? 'Movies' : 'TV Shows'}</div>
            <ContentWrapper>
                {
                    data?.data?.results?.length !== 0 ?
                        <div style={{ width: '100%' }}>
                            <Carousel data={data?.data?.results} mediaType={mediaType}></Carousel>
                        </div>
                        : <div className='Nodata' >
                            No data available
                        </div>
                }
            </ContentWrapper>
        </div>
    )
}

export default RecommendedMovies