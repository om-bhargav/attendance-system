import React,{useEffect, useState} from 'react'
const useLoading = () => {
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    },[]);
    return [loading,setLoading];
}

export default useLoading;