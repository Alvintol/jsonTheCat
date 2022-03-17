const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const args = process.argv.slice(2);
let urlSearch = url + args[0];

const breedFetcher = (urlSearch) => {
  request(urlSearch, (error, response, body) => {
    const recievedData = JSON.parse(body);

    if (error) {
      console.error(error);
      return;
    }
    if (recievedData.length === 0) {
      console.log('No Breed of that kind. Try another search!');
    }
    if (recievedData[0].description === undefined) {
      console.error('Error has occured. Please check search params');
      return
    }
    console.log(recievedData[0].description)
  })
};

breedFetcher(urlSearch);