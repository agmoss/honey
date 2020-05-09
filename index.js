const dotenv = require('dotenv');
const strapi = require('strapi');


const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

strapi().start();