// import axios from 'axios';
// // import SlimSelect from 'slim-select';

// axios.defaults.headers.common['x-api-key'] =
//   'live_rHTDikZpK6TeyKG7KsPPULvszGbkefM2L66OWPKA8kQlktY6Q7DLxTyQr2WD6IP3';

// const block = document.querySelector('.cat-info');
// const selectBreed = document.querySelector('.breed-select');

// // new SlimSelect({
// //   select: selectBreed,
// // });

// function createCat(data) {
//   return data
//     .map(({ breeds, id, url, width, height }) => {
//       const breedName = breeds.length > 0 ? breeds[0].name : 'Unknown breed';
//       const text =
//         breeds.length > 0 ? breeds[0].description : 'No description available';

//       return `<div class="cat-card">
//                 <img src="${url}" alt="${id}" width="${width}" height="${height}" class="cat-image" />
//                 <div class="cat-details">
//                   <h2 class="cat-name">${breedName}</h2>
//                   <p class="cat-description">${text}</p>
//                 </div>
//               </div>`;
//     })
//     .join('');
// }

// async function fetchCats() {
//   try {
//     const response = await axios.get(
//       'https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng'
//     );
//     const data = response.data;
//     const catHtml = createCat(data);
//     block.insertAdjacentHTML('beforeend', catHtml);
//   } catch (error) {
//     console.error('Error fetching cat data:', error);
//   }
// }

// fetchCats();

const KEY =
  'live_rHTDikZpK6TeyKG7KsPPULvszGbkefM2L66OWPKA8kQlktY6Q7DLxTyQr2WD6IP3';

const block = document.querySelector('.cat-info');
const selectBreed = document.querySelector('.breed-select');
const value = document.querySelector('[value="value1"]');
const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${KEY}`;

fetch(url)
  .then(res => res.json())
  .then(res => (value.textContent = res));
