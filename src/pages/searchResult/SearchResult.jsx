import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseFetch from '../../hooks/UseFetch';
import LazyLoadImg from '../../components/lazyLoadImage/LazyLoadImage';
import { useSelector } from 'react-redux'
import './searchResult.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchDataFromApi } from '../../api';
import PosterFallback from "../../assets/no-poster.png";
import Carousel1 from '../../components/carosoul/Carousel';
import MovieCard from '../../components/movieCard/MovieCard';

function SearchResult() {
    const [data, setData] = useState();
    const [pageNo, setPageNo] = useState('');
    const [totalPages, setTotalPages] = useState(null);

    const { query } = useParams();
    const [pageNum, setPageNum] = useState(1)
    const { url } = useSelector((state) => state.home)
    const navigate = useNavigate();
    console.log(query);
    console.log(pageNum);
    const fetchInitalData = () => {
        fetchDataFromApi(`search/multi?query=${query}&page=${pageNum}`)
            .then((res) => {
                setData(res?.data?.results);
                setPageNum((prev) => prev + 1);
                setTotalPages(res?.data?.total_pages)
            })
            .catch()
    }
    const fetchNextData = () => {
        fetchDataFromApi(`search/multi?query=${query}&page=${pageNum}`)
            .then((res) => {

                let list = [...data, ...res?.data?.results]
                setData(list);
                setTotalPages(res?.data?.total_pages)
                setPageNum((prev) => prev + 1);

            })
            .catch()
    }
    useEffect((item) => {

        fetchInitalData();
    }, [query])
    return (
        <div className='searchResultPage'>
            <div className='searchTitleText'>Search results of {query}</div>

            <div className='searchResultContainer'>
                <InfiniteScroll
                    className='infiniteScroll'
                    dataLength={data?.length || []}
                    next={fetchNextData}
                    hasMore={pageNum <= totalPages}
                    loader={<h4>Loading...</h4>}
                >

                    {
                        data?.map((item) => {

                            const imagePath = item.poster_path ? url.backdrop + item.poster_path : PosterFallback
                            return (
                                <MovieCard item={item}></MovieCard>

                            )
                        })
                    }
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default SearchResult