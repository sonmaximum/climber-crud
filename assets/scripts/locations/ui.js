'use strict'

const indexLocationsTemplate = require('../templates/location-listing.handlebars')
const editableLocationsTemplate = require('../templates/location-editing.handlebars')
const compare = require('../customsorter.js')

const locationIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index Succeeded')
  data.locations.sort(compare)
  const indexLocationsHtml = indexLocationsTemplate({ locations: data.locations })
  $('#newcontent').html('<h3>All Locations</h3>')
  $('#newcontent').append(indexLocationsHtml)
}

const locationIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index Failed')
  $('#newcontent').html('')
  console.log(error)
}

const locationMaintainedIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index of Maintained Locations Succeeded')
  data.locations.sort(compare)
  const indexLocationsHtml = editableLocationsTemplate({ locations: data.locations })
  $('#newcontent').html('<h3>Locations I maintain</h3>')
  $('#newcontent').append(indexLocationsHtml)
}

const locationMaintainedIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index of Maintained Locations Failed')
  $('#newcontent').html('')
  console.log(error)
}

const locationClimbedAtIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index of Climbed at Locations Succeeded')
  data.locations.sort(compare)
  const indexLocationsHtml = indexLocationsTemplate({ locations: data.locations })
  $('#newcontent').html('<h3>Locations I\'ve climbed at</h3>')
  $('#newcontent').append(indexLocationsHtml)
}

const locationClimbedAtIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index of Climbed at Locations Failed')
  $('#newcontent').html('')
  console.log(error)
}

const locationShowSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Succeeded')
  console.log(data)
  const showLocationsHtml = indexLocationsTemplate({ locations: data })
  console.log(showLocationsHtml)
  $('#newcontent').html('')
  $('#newcontent').append(showLocationsHtml)
}

const locationShowFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Failed')
  $('#newcontent').html('')
  console.log(error)
}

const locationDeleteSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Delete Succeeded')
  $('#newcontent').html('')
  console.log(data)
}

const locationDeleteFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Delete Failed')
  $('#newcontent').html('')
  console.log(error)
}

const locationCreateSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  const createLocationHtml = indexLocationsTemplate({ locations: data })
  $('#newcontent').html('<h3>Success!  Location Created</h3>')
  $('#newcontent').append(createLocationHtml)
}

const locationCreateFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Create Failed')
  $('#newcontent').html('')
  console.log(error)
}
const locationUpdateSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Update Succeeded')
  $('#newcontent').html('')
  const createLocationHtml = indexLocationsTemplate({ locations: data })
  $('#newcontent').html('<h3>Success!  Location Updated</h3>')
  $('#newcontent').append(createLocationHtml)
}

const locationUpdateFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Update Failed')
  $('#newcontent').html('')
  console.log(error)
}

module.exports = {
  locationIndexSuccess,
  locationIndexFailure,
  locationMaintainedIndexSuccess,
  locationMaintainedIndexFailure,
  locationClimbedAtIndexSuccess,
  locationClimbedAtIndexFailure,
  locationShowSuccess,
  locationShowFailure,
  locationDeleteSuccess,
  locationDeleteFailure,
  locationCreateSuccess,
  locationCreateFailure,
  locationUpdateSuccess,
  locationUpdateFailure
}
