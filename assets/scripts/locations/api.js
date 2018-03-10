'use strict'

const config = require('../config')
const store = require('../store')

let token

const locationIndex = function () {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const locationMaintainedIndex = function () {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  return $.ajax({
    url: config.apiOrigin + '/maintainedlocations',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const locationShow = function (data) {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  return $.ajax({
    url: config.apiOrigin + '/locations/' + data.location.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const locationDelete = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + data.location.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const locationCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/locations/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const locationUpdate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + data.location.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  locationIndex,
  locationMaintainedIndex,
  locationShow,
  locationDelete,
  locationCreate,
  locationUpdate
}
