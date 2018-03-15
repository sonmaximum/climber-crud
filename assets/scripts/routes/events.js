'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const locationDropdown = require('../locations/locationdropdown.js')

const createRouteForm = require('../templates/route-create-form.handlebars')
const routeAllOptions = require('../templates/route-all-options.handlebars')
const routeMyOptions = require('../templates/route-my-options.handlebars')

const api = require('./api')
const ui = require('./ui')

const onRouteIndex = function (event) {
  event.preventDefault()
  api.routeIndex()
    .then(ui.routeIndexSuccess)
    .catch(ui.routeIndexFailure)
}

const onRouteDelete = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.routeDelete(data)
    .then(ui.routeDeleteSuccess)
    .catch(ui.routeDeleteFailure)
}

const onRouteCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (!data.route.comments) {
    data.route.comments = 'None'
  }
  if (!data.route.color) {
    data.route.color = 'N/A'
  }
  switch (data.route.progress) {
    case 'notyetattempted':
      data.route.attempted = false
      data.route.completed = false
      data.route.sent = false
      break
    case 'attempted':
      data.route.attempted = true
      data.route.completed = false
      data.route.sent = false
      break
    case 'completed':
      data.route.attempted = true
      data.route.completed = true
      data.route.sent = false
      break
    case 'sent':
      data.route.attempted = true
      data.route.completed = true
      data.route.sent = true
      break
  }
  api.routeCreate(data)
    .then(ui.routeCreateSuccess)
    .catch(ui.routeCreateFailure)
}

const onRouteUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (!data.route.comments) {
    data.route.comments = 'None'
  }
  if (!data.route.color) {
    data.route.color = 'N/A'
  }
  api.routeUpdate(data)
    .then(ui.routeUpdateSuccess)
    .catch(ui.routeUpdateFailure)
}

const onRouteShowByType = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.routeShowByType(data)
    .then(ui.routeShowByTypeSuccess)
    .catch(ui.routeShowByTypeFailure)
}

const onRouteMyShowByType = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.routeMyShowByType(data)
    .then(ui.routeMyShowByTypeSuccess)
    .catch(ui.routeMyShowByTypeFailure)
}

const onRouteShowByLocation = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.routeShowByLocation(data)
    .then(ui.routeShowByLocationSuccess)
    .catch(ui.routeShowByLocationFailure)
}

const onRouteMyShowByLocation = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.routeMyShowByLocation(data)
    .then(ui.routeMyShowByLocationSuccess)
    .catch(ui.routeMyShowByLocationFailure)
}

const onRouteMyIndex = function (event) {
  if (event) {
    event.preventDefault()
  }
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

const showCreateRouteForm = function (event) {
  event.preventDefault()
  $('.right-side').show()
  $('#newcontent').hide()
  $('#newcontent').html(createRouteForm)
  locationDropdown()
  $('#route-create-form').on('submit', onRouteCreate)
}

const showAllRouteOptions = function (event) {
  event.preventDefault()
  $('.right-side').show()
  $('#newcontent').hide()
  $('#newcontent').html(routeAllOptions)
  locationDropdown()
  $('#route-index-form').on('submit', onRouteIndex)
  $('#route-show-by-location-form').on('submit', onRouteShowByLocation)
  $('#route-show-by-type-form').on('submit', onRouteShowByType)
}

const onRouteShowByProgress = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  switch (data.route.progress) {
    case 'attempted':
      onRouteAttempted(event)
      break
    case 'notattempted':
      onRouteNotAttempted(event)
      break
    case 'completed':
      onRouteCompleted(event)
      break
    case 'notcompleted':
      onRouteNotCompleted(event)
      break
    case 'sent':
      onRouteSent(event)
      break
    case 'notsent':
      onRouteNotSent(event)
      break
  }
}

const showMyRouteOptions = function (event) {
  event.preventDefault()
  $('.right-side').show()
  $('#newcontent').hide()
  $('#newcontent').html(routeMyOptions)
  locationDropdown()
  $('#route-my-index-form').on('submit', onRouteMyIndex)
  $('#route-my-show-by-location-form').on('submit', onRouteMyShowByLocation)
  $('#route-my-show-by-type-form').on('submit', onRouteMyShowByType)
  $('#projectbutton').on('click', onRouteProject)
  $('#nonprojectbutton').on('click', onRouteNotProject)
  $('#route-my-show-by-progress-form').on('submit', onRouteShowByProgress)
}

const addHandlers = () => {
  $('#route-delete-form').on('submit', onRouteDelete)
  $('#route-update-form').on('submit', onRouteUpdate)
  $('#route-attempted-form').on('submit', onRouteAttempted)
  $('#route-completed-form').on('submit', onRouteCompleted)
  $('#route-sent-form').on('submit', onRouteSent)
  $('#route-project-form').on('submit', onRouteProject)
  $('#route-not-attempted-form').on('submit', onRouteNotAttempted)
  $('#route-not-completed-form').on('submit', onRouteNotCompleted)
  $('#route-not-sent-form').on('submit', onRouteNotSent)
  $('#route-not-project-form').on('submit', onRouteNotProject)
  $('#route-create-show-form').on('click', showCreateRouteForm)
  $('#route-show-all-options').on('click', showAllRouteOptions)
  $('#route-show-my-options').on('click', showMyRouteOptions)
}

module.exports = {
  addHandlers,
  onRouteUpdate,
  onRouteMyIndex
}
