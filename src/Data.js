import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Data.css';

const CatBreeds = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const limit = 5; 
      const response = await axios.get(`https://catfact.ninja/breeds?page=${page}&limit=${limit}`);
      setData(response.data.data);
      setTotalPages(Math.ceil(response.data.total / limit));
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      <h1>Cat Breeds</h1>
      <ul>
        {data.map((breed) => (
          <li key={breed.breed}>
            <h2>{breed.breed}</h2>
            <p>Country: {breed.country}</p>
            <p>Origin: {breed.origin}</p>
            <p>Coat: {breed.coat}</p>
            <p>Pattern: {breed.pattern}</p>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatBreeds;
