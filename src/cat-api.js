import axios from 'axios';

const URL = 'https://api.thecatapi.com/v1';
const KEY =
  'live_rHTDikZpK6TeyKG7KsPPULvszGbkefM2L66OWPKA8kQlktY6Q7DLxTyQr2WD6IP3';
axios.defaults.headers.common['x-api-key'] = KEY;

const url = `${URL}/breeds?api_key=${KEY}`;

let storedBreeds = [];

export function fetchBreeds() {
  console.log('Порода');
  return axios
    .get(url)
    .then(resolve => {
      const arrData = resolve.data;
      console.log(arrData);
      return arrData.map(({ id }) => {
        storedBreeds.push({ value: id });
      });
    })
    .catch(error => console.log(error));
}

export function fetchCatByBreed(breedId) {
  console.log('По ID');
}
