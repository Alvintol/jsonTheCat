const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {

  request(`${url}${breedName}`, (error, response, body) => {
    const recievedData = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    if (recievedData.length === 0) {
      callback(null, 'No Breed of that kind. Try another search!');
      return;
    }
    return callback(null, recievedData[0].description);
  })
};

module.exports = { fetchBreedDescription };