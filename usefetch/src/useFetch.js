import React, { useEffect, useState } from 'react'

const useFetch = (url,options={}) => {

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData = async() =>{
            try{
            setLoading(true)
            const response = await fetch(url,{...options})
            if(!response.ok) throw new Error('something missing')
            const result = await response.json()
            setData(result)
            setError(null)
            setLoading(false)
            } catch(e){
                setError(e.message)
                setLoading(false)
            }
        }
        fetchData()
    },[url])

  return (
    {data,loading,error}
  )
}

export default useFetch