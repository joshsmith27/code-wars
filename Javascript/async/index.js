const axios = require('axios');
const baseUrl = `http://localhost:8080/api/numbers`;
const getStuff = () => {
    // console.log(axios.get(`${baseUrl}api/numbers`))
    return axios.get(`${baseUrl}`)
}

getStuff()
    .then((res)=>{
        console.log(res.data)
        const stuff = res.data[0];
       return axios.delete(`${baseUrl}?num=${stuff}`)
    })
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.response.statusText)
    })

// const promisThing = {
//     then:function(cb){
//         return cb()
//     },
//     catch:function(cb){
//         return cb()
//     }
// }