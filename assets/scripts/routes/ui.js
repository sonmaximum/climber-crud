'use strict'

const store = require('../store')

const routeIndexSuccess = function (data) {
  $('#message').text('Index Succeeded')
  console.log(data)
}

const routeIndexFailure = function (error) {
  $('#message').text('Index Failed')
  console.log(error)
}

const routeShowSuccess = function (data) {
  $('#message').text('Show Succeeded')
  console.log(data)
}

const routeShowFailure = function (error) {
  $('#message').text('Show Failed')
  console.log(error)
}

const routeDeleteSuccess = function (data) {
  $('#message').text('Delete Succeeded')
  console.log(data)
}

const routeDeleteFailure = function (error) {
  $('#message').text('Delete Failed')
  console.log(error)
}

const routeCreateSuccess = function (data) {
  $('#message').text('Create Succeeded')
  console.log(data)
}

const routeCreateFailure = function (error) {
  $('#message').text('Create Failed')
  console.log(error)
}
const routeUpdateSuccess = function (data) {
  $('#message').text('Update Succeeded')
  console.log(data)
}

const routeUpdateFailure = function (error) {
  $('#message').text('Update Failed')
  console.log(error)
}

module.exports = {
  store,
  routeIndexSuccess,
  routeIndexFailure,
  routeShowSuccess,
  routeShowFailure,
  routeDeleteSuccess,
  routeDeleteFailure,
  routeCreateSuccess,
  routeCreateFailure,
  routeUpdateSuccess,
  routeUpdateFailure
}
