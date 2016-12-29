import axios from 'axios'

//使用代理
const HOST = '/api/';
const BASE_URL = '/baseurl/'

const defaults = {
  baseURL: HOST,
  transformResponse: [(data) => {
    console.log(".........................." + data);
    return JSON.parse(replaceImageUrl(data))
  }]
}

Object.assign(axios.defaults, defaults)

export const fetchLatest = () => {
  return axios.get('/4/news/latest')
}

function replaceImageUrl (str) {
  let reg = /https?:(\\?\/){2}(pic\d*\.zhimg\.com\\?\/)/g
  return str.replace(reg, 'https://images.weserv.nl/?url=$2')
}


function login() {
    axios.post('/role/user/login', {
      phone: '15396005445',
      password: '49BA59ABBE56E057'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// https://images.weserv.nl/?url=pic4.zhimg.com/dc48d1d3f9d013214a085149d610a11b.jpg
