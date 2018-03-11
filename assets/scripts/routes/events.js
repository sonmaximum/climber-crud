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

const onRouteShowByType = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.routeShowByType(data)
    .then(ui.routeShowByTypeSuccess)
    .catch(ui.routeShowByTypeFailure)
}

const onRouteMyShowByType = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.routeMyShowByLocation(data)
    .then(ui.routeMyShowByLocationSuccess)
    .catch(ui.routeMyShowByLocationFailure)
}

const onRouteShowByLocation = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.routeShowByLocation(data)
    .then(ui.routeShowByLocationSuccess)
    .catch(ui.routeShowByLocationFailure)
}

const onRouteMyShowByLocation = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.routeMyShowByType(data)
    .then(ui.routeMyShowByTypeSuccess)
    .catch(ui.routeMyShowByTypeFailure)
}

const onRouteMyIndex = function (event) {
  event.preventDefault()
  api.routeMyIndex()
    .then(ui.routeMyIndexSuccess)
    .catch(ui.routeMyIndexFailure)
}

const onRouteAttempted = function (event) {
  event.preventDefault()
  api.routeStatusBools('attempted/', 1)
    .then(ui.routeAttemptedSuccess)
    .catch(ui.routeAttemptedFailure)
}

const onRouteCompleted = function (event) {
  event.preventDefault()
  api.routeStatusBools('completed/', 1)
    .then(ui.routeCompletedSuccess)
    .catch(ui.routeCompletedFailure)
}

const onRouteSent = function (event) {
  event.preventDefault()
  api.routeStatusBools('sent/', 1)
    .then(ui.routeSentSuccess)
    .catch(ui.routeSentFailure)
}

const onRouteProject = function (event) {
  event.preventDefault()
  api.routeStatusBools('projects/', 1)
    .then(ui.routeProjectSuccess)
    .catch(ui.routeProjectFailure)
}

const onRouteNotAttempted = function (event) {
  event.preventDefault()
  api.routeStatusBools('attempted/', 0)
    .then(ui.routeNotAttemptedSuccess)
    .catch(ui.routeNotAttemptedFailure)
}

const onRouteNotCompleted = function (event) {
  event.preventDefault()
  api.routeStatusBools('completed/', 0)
    .then(ui.routeNotCompletedSuccess)
    .catch(ui.routeNotCompletedFailure)
}

const onRouteNotSent = function (event) {
  event.preventDefault()
  api.routeStatusBools('sent/', 0)
    .then(ui.routeNotSentSuccess)
    .catch(ui.routeNotSentFailure)
}

const onRouteNotProject = function (event) {
  event.preventDefault()
  api.routeStatusBools('projects/', 0)
    .then(ui.routeNotProjectSuccess)
    .catch(ui.routeNotProjectFailure)
}

const addHandlers = () => {
  $('#route-index-form').on('submit', onRouteIndex)
  $('#route-show-form').on('submit', onRouteShow)
  $('#route-delete-form').on('submit', onRouteDelete)
  $('#route-create-form').on('submit', onRouteCreate)
  $('#route-update-form').on('submit', onRouteUpdate)
  $('#route-show-by-type-form').on('submit', onRouteShowByType)
  $('#route-my-show-by-type-form').on('submit', onRouteMyShowByType)
  $('#route-show-by-location-form').on('submit', onRouteShowByLocation)
  $('#route-my-show-by-location-form').on('submit', onRouteMyShowByLocation)
  $('#route-my-index-form').on('submit', onRouteMyIndex)
  $('#route-attempted-form').on('submit', onRouteAttempted)
  $('#route-completed-form').on('submit', onRouteCompleted)
  $('#route-sent-form').on('submit', onRouteSent)
  $('#route-project-form').on('submit', onRouteProject)
  $('#route-not-attempted-form').on('submit', onRouteNotAttempted)
  $('#route-not-completed-form').on('submit', onRouteNotCompleted)
  $('#route-not-sent-form').on('submit', onRouteNotSent)
  $('#route-not-project-form').on('submit', onRouteNotProject)
}

module.exports = {
  addHandlers
}
