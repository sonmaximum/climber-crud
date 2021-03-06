'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const locationDropdown = require('./locationdropdown.js')
const createLocationForm = require('../templates/location-create-form.handlebars')

const api = require('./api')
const ui = require('./ui')

const onLocationIndex = function (event) {
  event.preventDefault()
  $('.right-side').show()
  api.locationIndex()
    .then(ui.locationIndexSuccess)
    .catch(ui.locationIndexFailure)
}

const onLocationMaintainedIndex = function (event) {
  if (event) {
    event.preventDefault()
  }
  $('.right-side').show()
  api.locationMaintainedIndex()
    .then(ui.locationMaintainedIndexSuccess)
    .catch(ui.locationMaintainedIndexFailure)
}

const onLocationClimbedAtIndex = function (event) {
  event.preventDefault()
  $('.right-side').show()
  api.locationClimbedAtIndex()
    .then(ui.locationClimbedAtIndexSuccess)
    .catch(ui.locationClimbedAtIndexFailure)
}

const onLocationShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.locationShow(data)
    .then(ui.locationShowSuccess)
    .catch(ui.locationShowFailure)
}

const onLocationDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.locationDelete(data)
    .then(ui.locationDeleteSuccess)
    .then(locationDropdown)
    .catch(ui.locationDeleteFailure)
}

const onLocationCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (!data.location.comments) {
    data.location.comments = 'None'
  }
  api.locationCreate(data)
    .then(ui.locationCreateSuccess)
    .then(locationDropdown)
    .catch(ui.locationCreateFailure)
}

const onLocationUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (!data.location.comments) {
    data.location.comments = 'None'
  }
  api.locationUpdate(data)
    .then(ui.locationUpdateSuccess)
    .catch(ui.locationUpdateFailure)
    .then(locationDropdown)
}

const showCreateLocationForm = function (event) {
  event.preventDefault()
  $('.right-side').show()
  $('#newcontent').html('')
  $('#newcontent').html(createLocationForm)
  $('#location-create-form').on('submit', onLocationCreate)
}

const addHandlers = () => {
  $('#location-index-form').on('submit', onLocationIndex)
  $('#location-show-form').on('submit', onLocationShow)
  $('#location-delete-form').on('submit', onLocationDelete)
  $('#location-maintained-index-form').on('submit', onLocationMaintainedIndex)
  $('#location-climbed-at-index-form').on('submit', onLocationClimbedAtIndex)
  $('#location-create-show-form').on('click', showCreateLocationForm)
}

module.exports = {
  addHandlers,
  onLocationMaintainedIndex,
  onLocationUpdate
}
