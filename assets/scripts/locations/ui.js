'use strict'

const indexLocationsTemplate = require('../templates/location-listing.handlebars')
const editableLocationsTemplate = require('../templates/location-editing.handlebars')
const compare = require('../customsorter.js')
const store = require('../store')

const locationIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.locations.sort(compare)
  const indexLocationsHtml = indexLocationsTemplate({ locations: data.locations })
  $('#newcontent').html('<h3>All Locations</h3>')
  $('#newcontent').append(indexLocationsHtml)
}

const locationIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}

const locationMaintainedIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.locations.sort(compare)
  const indexLocationsHtml = editableLocationsTemplate({ locations: data.locations })
  $('#newcontent').html('<h3>Locations I Maintain</h3>')
  $('#newcontent').append(indexLocationsHtml)
}

const locationMaintainedIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}

const locationClimbedAtIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.locations.sort(compare)
  const indexLocationsHtml = indexLocationsTemplate({ locations: data.locations })
  $('#newcontent').html('<h3>Locations I\'ve climbed at</h3>')
  $('#newcontent').append(indexLocationsHtml)
}

const locationClimbedAtIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}

const locationShowSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  const showLocationsHtml = indexLocationsTemplate({ locations: data })
  $('#newcontent').html('')
  $('#newcontent').append(showLocationsHtml)
}

const locationShowFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}

const locationDeleteSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
}

const locationDeleteFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#newcontent').html('<h3>Success!  Location Deleted</h3>')
  store.error = error
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
  $('#generic-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}
const locationUpdateSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  const createLocationHtml = indexLocationsTemplate({ locations: data })
  $('#newcontent').html('<h3>Success!  Location Updated</h3>')
  $('#newcontent').append(createLocationHtml)
}

const locationUpdateFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
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
