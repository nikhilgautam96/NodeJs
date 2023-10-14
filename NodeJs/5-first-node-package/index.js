import axios from 'axios';

async function fetch() {
    const response = await axios.get(
        'http://www.omdbapi.com/?t=harry&apikey=180ce21d'
    );
    console.log(response.data);
}
fetch();
