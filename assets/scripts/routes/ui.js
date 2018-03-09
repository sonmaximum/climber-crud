'use strict'

const indexRoutesTemplate = require('../templates/route-listing.handlebars')

const store = require('../store')

const routeIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index Succeeded')
  console.table(data.routes)
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeIndexFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index Failed')
  console.log(error)
}

const routeShowSuccess = function (data) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Succeeded')
  console.table(data)
  const showRoutesHtml = indexRoutesTemplate({ routes: data })
  $('#newcontent').html('')
  $('#newcontent').append(showRoutesHtml)
}

const routeShowFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Failed')
  console.log(error)
}

const routeDeleteSuccess = function (data) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Delete Succeeded')
  console.log(data)
}

const routeDeleteFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Delete Failed')
  console.log(error)
}

const routeCreateSuccess = function (data) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Create Succeeded')
  console.log(data)
}

const routeCreateFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Create Failed')
  console.log(error)
}
const routeUpdateSuccess = function (data) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Update Succeeded')
  console.log(data)
}

const routeUpdateFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
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
