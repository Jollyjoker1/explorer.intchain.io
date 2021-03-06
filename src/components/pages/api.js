import axios from 'axios'
function request (url, params) {
  return axios.get(url, {params}
    ).then( res => {
    if (res.data.status === "success") {
      let result = res.data
      return result
    }
  }).catch (err => {
    throw Error(err)
  })
}

export default request
