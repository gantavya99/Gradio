import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','06b58b70bemsh79036c742fc3282p11015fjsn42e869176c14')
            return headers;
        }
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>'/charts/world'}),
        getSongDetails : builder.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),
    })
});

export const{ useGetTopChartsQuery , useGetSongDetailsQuery }=shazamCoreApi;