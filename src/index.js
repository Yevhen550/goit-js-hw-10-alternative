import { fetchBreeds, fetchCatByBreed } from './cat-api';

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectBreed = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const block = document.querySelector('.cat-info');

let arrBreedId = [];

selectBreed.addEventListener('change', onSelectValue);

function onSelectValue(ev) {
  ev.preventDefault();
}

fetchBreeds().then(data => {
  data.map(el => {
    arrBreedId.push({ text: el.name, value: el.id });
  });
  new SlimSelect({
    select: selectBreed,
    data: arrBreedId,
    settings: {
      searchPlaceholder: 'Шукаю котика',
    },
  });
});
