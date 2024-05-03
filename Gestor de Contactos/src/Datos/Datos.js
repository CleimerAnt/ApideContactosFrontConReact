import {useState, useEffect} from 'react'

export default function UseFetch(url){
    const  [data, setData] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => setData(data)        
    )
    }, [data])
    
    return { data, setData };
}   