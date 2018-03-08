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

const addHandlers = () => {
  $('#route-index-form').on('submit', onRouteIndex)
  $('#route-show-form').on('submit', onRouteShow)
  $('#route-delete-form').on('submit', onRouteDelete)
}

module.exports = {
  addHandlers,
  getFormFields
}
