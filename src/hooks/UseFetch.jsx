import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../api';

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        setData(null);
        setLoading("loading...");
        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res)
            }).catch((err) => {
                setLoading(false);

            })
    }, [url])


    return (
        { data, loading, error }
    )
}

export default UseFetch