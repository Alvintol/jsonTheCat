const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.error('Error during detail fetch', error);
  } else {
    console.log(desc)
  }
});
