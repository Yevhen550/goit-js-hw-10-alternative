import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const selectBreed = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const block = document.querySelector('.cat-info');

let arrBreedId = [];

// selectBreed.style.display = none;

fetchBreeds()
  .then(data => {
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
  })
  .catch(error => console.log(error));

selectBreed.addEventListener('change', onSelectValue);

function onSelectValue(ev) {
  const breedId = ev.currentTarget.value;

  loader.style.display = block;

  fetchCatByBreed(breedId).then(data => {
    const { url, breeds } = data[0];
    const { name, temperament, description } = breeds[0];

    block.innerHTML = `<div class="cat-card">
      <img
        src=${url}
        class="cat-image"
       />
     <div class="cat-details">
       <h2 class="cat-name">${name}</h2>
       <p class="cat-description">${description}</p>
       <p class="cat-temperament"><b>Temperament: </b>${temperament}</p>
     </div>
</div>
`;
  });
}
