fetch(
  'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_rHTDikZpK6TeyKG7KsPPULvszGbkefM2L66OWPKA8kQlktY6Q7DLxTyQr2WD6IP3'
)
  .then(r => r.json)
  .then(console.log);
