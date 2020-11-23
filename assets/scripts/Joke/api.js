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

const jokeUpdate = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/jokes/' + data.joke.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      "joke": {
        "joke": data.joke.joke,
        "punchLine": data.joke.punchLine
      }
    }
  })
}

const jokeDelete = (data) => {
  return $.ajax({
    method: 'DELETE',
    data: data,
    url: config.apiUrl + '/jokes/' + data.joke.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const jokeShow = (data) => {
    return $.ajax({
      method: 'GET',
      data: data,
      url: config.apiUrl + '/jokes/' + data.joke.id,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
  }

module.exports = {
  jokeCreate,
  jokeUpdate,
  jokeDelete,
  jokeShow
}