
const axios = require("axios");
let bin = ""

let fre = axios.get(`https://lookup.binlist.net/${bin}`)

let french = fre.data;

console.log(french)
