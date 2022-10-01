const PORT= 8000;
const express= require('express');
const cors= require('cors');
require('dotenv').config();
const axios= require('axios');
const app= express()
app.use(cors())


app.get('/results', (req,res)=>{
    const passedLevel= req.query.level;
 

    const options = {
        method: 'GET',
        url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
        params: {level: passedLevel, area: 'sat'},
        headers: {
          'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data);
      }).catch(function (error) {
        console.error(error);
      });

})

app.listen(PORT, ()=> console.log(`server is running on port ${PORT} `))