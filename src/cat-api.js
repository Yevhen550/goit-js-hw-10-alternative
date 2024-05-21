// import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_rHTDikZpK6TeyKG7KsPPULvszGbkefM2L66OWPKA8kQlktY6Q7DLxTyQr2WD6IP3';
// axios.defaults.headers.common['x-api-key'] = API_KEY;

const url = `${BASE_URL}/breeds?api_key=${API_KEY}`;

export function fetchBreeds() {
  return fetch(url).then(resolve => resolve.json());
}

export function fetchCatByBreed(breedId) {
  console.log('По ID');
}
