'use strict'

const config = require('../config')
const store = require('../store')

let token
let id

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

const locationClimbedAtIndex = function () {
  token = ''
  if (store.user) {
    token = store.user.token
  }
  return $.ajax({
    url: config.apiOrigin + '/mylocations',
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
  if (data.location) {
    id = data.location.id
  } else {
    id = data
  }
  return $.ajax({
    url: config.apiOrigin + '/locations/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + token
    }
  })
}

const locationDelete = function (data) {
  if (data.location) {
    id = data.location.id
  } else {
    id = data
  }
  return $.ajax({
    url: config.apiOrigin + '/locations/' + id,
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
  locationUpdate,
  locationClimbedAtIndex
}
