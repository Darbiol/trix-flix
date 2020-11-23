let apiKey = process.env.TMDB_API_KEY;
import { TMDB_BASE_URL } from "../utils/constants";

async function httpFetch (url:RequestInfo) {
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}

async function getById(id:string){
    const url:RequestInfo = `${TMDB_BASE_URL}/movie/${id}?api_key=${apiKey}`;
    const data = await httpFetch(url);
    return data;
}

async function getSimilar(id:string){
    const url:RequestInfo = `${TMDB_BASE_URL}/movie/${id}/similar?api_key=${apiKey}`;
    const data = await httpFetch(url);
    return data;
}

export {getById, getSimilar};