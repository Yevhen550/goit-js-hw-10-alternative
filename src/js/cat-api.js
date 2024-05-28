// import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_rHTDikZpK6TeyKG7KsPPULvszGbkefM2L66OWPKA8kQlktY6Q7DLxTyQr2WD6IP3';
// axios.defaults.headers.common['x-api-key'] = API_KEY;

export async function fetchBreeds() {
  const response = await fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

export async function fetchCatByBreed(breedId) {
  const response = await fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(res.status);
  }
  return await response.json();
}
