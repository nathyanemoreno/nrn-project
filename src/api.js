import axios from 'axios';

const api = axios.create({
	// baseUrl:"https://nrn-backend.herokuapp.com",
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
	timeout:60000

});

// api.defaults.timeout = 60000;
// api.defaults.pfoxy.host = "https://nrn-backend.herokuapp.com"

export default api;
