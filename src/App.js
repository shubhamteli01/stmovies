import './App.css';
import { fetchDataFromApi } from './api';
import { useEffect } from "react";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SearchResult from './pages/searchResult/SearchResult';
import Spinner from './components/spinner/Spinner';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import CircularRating from './components/circularRating/CircularRating';
import Check from './pages/Check';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  // console.log(url.data.results)
  useEffect(() => {
    testApi();
  }, [])
  const testApi = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res)
      const url = {
        backdrop: res?.data?.images?.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url));
    })
  }

  return (

    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/spin" element={<Spinner />} />
        <Route path="/cir" element={<CircularRating />} />
        <Route path="/check" element={<Check />} />

      </Routes>
      <Footer></Footer>
    </Router>




  );
}

export default App;
