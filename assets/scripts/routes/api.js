'use strict'

const config = require('../config')
const store = require('../store')

let token = ''

const routeIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/routes',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const routeShow = function (data) {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  return $.ajax({
    url: config.apiOrigin + '/routes/' + data.route.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const routeDelete = function (data) {
  console.log(data)
  console.log(token)
  return $.ajax({
    url: config.apiOrigin + '/routes/' + data.route.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  routeIndex,
  routeShow,
  routeDelete
}
