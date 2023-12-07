import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LazyLoadImg from '../../components/lazyLoadImage/LazyLoadImage';
import { useSelector } from 'react-redux';
import './explore.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchDataFromApi } from '../../api';
import PosterFallback from "../../assets/no-poster.png";
import Select from 'react-select';
import UseFetch from '../../hooks/UseFetch';
import Header from '../../components/header/Header';
import MovieCard from '../../components/movieCard/MovieCard';
function Explore() {
    let filters = {};
    const sortbyData = [
        { value: "popularity.desc", label: "Popularity Descending" },
        { value: "popularity.asc", label: "Popularity Ascending" },
        { value: "vote_average.desc", label: "Rating Descending" },
        { value: "vote_average.asc", label: "Rating Ascending" },
        {
            value: "primary_release_date.desc",
            label: "Release Date Descending",
        },
        { value: "primary_release_date.asc", label: "Release Date Ascending" },
        { value: "original_title.asc", label: "Title (A-Z)" },
    ];
    const [data1, setData] = useState();
    const [genre, setGenre] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    const { mediaType } = useParams();
    const [pageNum, setPageNum] = useState(1)
    const { url } = useSelector((state) => state.home)
    const navigate = useNavigate();
    console.log(mediaType)
    const { data } = UseFetch(`/genre/movie/list`);
    console.log(data);
    console.log(data?.data?.genres);
    const fetchInitalData = () => {
        fetchDataFromApi(`/discover/${mediaType}`, filters)
            .then((res) => {
                setData(res?.data?.results);
                setPageNum((prev) => prev + 1);
                setTotalPages(res?.data?.total_pages)
            })
            .catch()
    }
    const fetchNextData = () => {
        fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters)
            .then((res) => {
                let list = [...data1, ...res?.data?.results]
                setData(list);
                setTotalPages(res?.data?.total_pages)
                setPageNum((prev) => prev + 1);
            })
            .catch()
    }
    const onChange = (selectedItems, action) => {

        if (action.name === 'sortby') {
            if (action.action !== "clear") {
                filters.sort_by = selectedItems.value;
            } else {
                delete filters.sort_by;
            }

        }
        if (action.name === 'genre') {
            if (action.action !== "clear") {
                let genreId = selectedItems.map((ele) => { return ele.id });
                genreId = JSON.stringify(genreId).slice(1, -1);
                filters.with_genres = genreId;
                console.log(genreId);
                console.log(selectedItems);
            } else {
                delete filters.with_genres;
            }
        }
        console.log(filters);
        fetchInitalData();
    }
    useEffect(() => {
        filters = {};
        setData(null);
        setPageNum(1);
        setSortBy(null);
        setGenre(null);
        fetchInitalData();
    }, [mediaType])
    return (
        <>
            <div className='searchResultPage'>
                <div className='titleBox'>
                    <div className='exploresearchTitleText'>Explore {mediaType} </div>
                    <div className='selectbox'>
                        <Select
                            isMulti
                            name="genre"
                            defaultValue={genre}
                            options={data?.data?.genres}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.id}
                            onChange={onChange}
                            placeholder="Select Genres"
                            className="react-select-container select"
                            classNamePrefix="react-select"

                        />
                        <Select
                            name="sortby"
                            defaultValue={sortBy}
                            onChange={onChange}
                            options={sortbyData}

                            placeholder="Sort By"
                            className="react-select-container genresDD select"
                            classNamePrefix="react-select"
                        />

                    </div>
                </div>



                <div className='searchResultContainer'>
                    <InfiniteScroll
                        style={{ width: '100%' }}
                        className='infiniteScroll'
                        dataLength={data?.length || []}
                        next={fetchNextData}
                        hasMore={pageNum <= totalPages}
                    >
                        {
                            data1?.map((item) => {
                                return (
                                    <div style={{ margin: 'auto' }}>
                                        <MovieCard item={item} mediaType={mediaType}></MovieCard>

                                    </div>

                                )
                            })
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )

}

export default Explore