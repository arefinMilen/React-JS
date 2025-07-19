import React , {useState,useEffect} from 'react';

const useFetch = (url) => {
 
      const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    setTimeout(() => {
      fetch(url).then((res)=>{
        if(!res.ok){
          throw Error("Something went wrong while fetching the data");
        }
        return res.json();
      })
      .then((data)=>{
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error)=>{
        setError(error.message);
        setLoading(false);
      })
  },2000);
  },[url]);
  return {data, isLoading, error};
}

export default useFetch
