import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06b58b70bemsh79036c742fc3282p11015fjsn42e869176c14',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
});