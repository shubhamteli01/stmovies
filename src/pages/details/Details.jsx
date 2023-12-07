import React from 'react'
import DetailsBanner from '../../components/detailsbanner/DetailsBanner'
import Cast from '../../components/cast/Cast'
import './details.css'
import UseFetch from '../../hooks/UseFetch';
import { useParams } from 'react-router-dom';
import OfficailVideos from '../../components/videos/OfficailVideos';
import SimilearMovies from './Caurosels/SimilearMovies';
import RcecommendedMovies from './Caurosels/RecommendedMovies';
function Details() {
    const { mediaType, id } = useParams();
    const { data, loading } = UseFetch(`/${mediaType}/${id}/videos`);
    const credits = UseFetch(`${mediaType}/${id}/credits`);
    console.log(credits)
    return (
        <div className='detailsPage'>
            <DetailsBanner video={data?.data?.results[0]} crew={credits} loading={loading}></DetailsBanner>
            <Cast credits={credits?.data?.data?.cast}></Cast>
            <OfficailVideos data={data}></OfficailVideos>
            <SimilearMovies mediaType={mediaType} id={id} ></SimilearMovies>
            <RcecommendedMovies mediaType={mediaType} id={id} ></RcecommendedMovies>

        </div>
    )
}

export default Details