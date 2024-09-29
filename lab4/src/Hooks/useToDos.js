import { useState, useEffect } from 'react';
import useLoading from '../useLoading';

const useGetAllToDo = () => {
  const { isLoading, setIsLoading } = useLoading();

  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setIsLoading(false);
        }); 
    };
    fetchData();
  }, []);

  return { isLoading, data, setData };
};

export default useGetAllToDo;
