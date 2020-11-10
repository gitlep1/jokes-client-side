'use strict'

const store = require('../store')
const config = require('../config')

const jokeCreate = (data) => {
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/jokes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const jokeUpdate = (data) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/jokes/' + store.joke._id,
//     data: data,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//     // data: {
//     //   "joke": {
//     //     "joke": "",
//     //     "punchLine": ""
//     //   }
//     // }
//   })
// }

// const jokeDelete = (data) => {
//   return $.ajax({
//     method: 'DELETE',
//     data: data,
//     url: config.apiUrl + '/jokes',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  jokeCreate,
  // jokeUpdate,
  // jokeDelete
}