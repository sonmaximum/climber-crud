'use strict'

const config = require('../config')
const store = require('../store')

let token

const routeIndex = function () {
  token = ''
  if (store.user) {
    token = store.user.token
  }
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
  console.log(data)
  console.log(token)
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
  return $.ajax({
    url: config.apiOrigin + '/routes/' + data.route.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const routeCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/routes/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const routeUpdate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/routes/' + data.route.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  routeIndex,
  routeShow,
  routeDelete,
  routeCreate,
  routeUpdate
}
