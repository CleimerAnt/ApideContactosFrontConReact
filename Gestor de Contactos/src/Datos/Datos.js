import {useState, useEffect} from 'react'

export default function UseFetch(url){
    const  [data, setData] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])
    
    return { data };
}