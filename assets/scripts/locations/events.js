'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onLocationIndex = function (event) {
  event.preventDefault()
  api.locationIndex()
    .then(ui.locationIndexSuccess)
    .catch(ui.locationIndexFailure)
}

const onLocationShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.locationShow(data)
    .then(ui.locationShowSuccess)
    .catch(ui.locationShowFailure)
}

const onLocationDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.locationDelete(data)
    .then(ui.locationDeleteSuccess)
    .catch(ui.locationDeleteFailure)
}

const onLocationCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.locationCreate(data)
    .then(ui.locationCreateSuccess)
    .catch(ui.locationCreateFailure)
}

const onLocationUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.locationUpdate(data)
    .then(ui.locationUpdateSuccess)
    .catch(ui.locationUpdateFailure)
}

const addHandlers = () => {
  $('#location-index-form').on('submit', onLocationIndex)
  $('#location-show-form').on('submit', onLocationShow)
  $('#location-delete-form').on('submit', onLocationDelete)
  $('#location-create-form').on('submit', onLocationCreate)
  $('#location-update-form').on('submit', onLocationUpdate)
}

module.exports = {
  addHandlers
}
