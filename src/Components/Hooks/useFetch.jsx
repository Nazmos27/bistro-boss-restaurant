import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
    },[])
    return [data,loading]
}

export default useFetch