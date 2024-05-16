const block = document.querySelector('.cat-info');

fetch(
  'https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=beng&api_key=live_rHTDikZpK6TeyKG7KsPPULvszGbkefM2L66OWPKA8kQlktY6Q7DLxTyQr2WD6IP3'
)
  .then(r => r.json())
  .then(res => {
    return function createCat(res) {
      return res
        .map(({ breeds, id, url, width, height }) => {
          return `
        <li class="gallery__item">
           
             <img
                class="gallery__image"
                src="${url}"
                width="${width}"
                height="${height}"
             />
           </a>
         </li>`;
        })
        .join('');
    };
  });

block.insertAdjacentHTML('beforeend', createCat);
//   function getImgOriginal(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <li class="gallery__item">
//           <a class="gallery__link" href="${original}">
//             <img
//                class="gallery__image"
//                src="${preview}"
//                alt="${description}"
//             />
//           </a>
//         </li>`;
//     })
//     .join('');
// }

// galeryEl.addEventListener('click', handleClick);
