import axios from 'axios'

//使用代理
const HOST = '/api/';

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

// https://images.weserv.nl/?url=pic4.zhimg.com/dc48d1d3f9d013214a085149d610a11b.jpg
