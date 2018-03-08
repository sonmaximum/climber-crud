'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onRouteIndex = function (event) {
  event.preventDefault()
  api.routeIndex()
    .then(ui.routeIndexSuccess)
    .catch(ui.routeIndexFailure)
}

const onRouteShow = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.routeShow(data)
    .then(ui.routeShowSuccess)
    .catch(ui.routeShowFailure)
}

const onRouteDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.routeDelete(data)
    .then(ui.routeDeleteSuccess)
    .catch(ui.routeDeleteFailure)
}

const onRouteCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.routeCreate(data)
    .then(ui.routeCreateSuccess)
    .catch(ui.routeCreateFailure)
}

const onRouteUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.routeUpdate(data)
    .then(ui.routeUpdateSuccess)
    .catch(ui.routeUpdateFailure)
}

const addHandlers = () => {
  $('#route-index-form').on('submit', onRouteIndex)
  $('#route-show-form').on('submit', onRouteShow)
  $('#route-delete-form').on('submit', onRouteDelete)
  $('#route-create-form').on('submit', onRouteCreate)
  $('#route-update-form').on('submit', onRouteUpdate)
}

module.exports = {
  addHandlers,
  getFormFields
}
