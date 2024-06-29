
var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://code-compiler.p.rapidapi.com/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-host': 'code-compiler.p.rapidapi.com',
    'x-rapidapi-key': 'b8132d3cb6mshe151c16cb42d60ep184351jsn6303b76a5a06'
  },
  data: {LanguageChoice: '17',
     Program: 'for(let i=0;i<4;i++){console.log(i)} console.log("jeio")'}
    
    
    
    
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
