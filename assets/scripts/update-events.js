'use strict'

const locationsApi = require('./locations/api.js')
const locationsEvents = require('./locations/events.js')
const locationsUI = require('./locations/ui.js')
// const routesApi = require('./routes/api.js')
// const routesEvents = require('./routes/events.js')
// const routesUI = require('./routes/ui.js')

const updateLocationForm = require('./templates/location-update-form.handlebars')

let updateID
// let currentEvent

const identifyLocToUpdate = function (event) {
  event.preventDefault()
  // currentEvent = event
  console.log('wee')
  updateID = event.target.dataset.id
  console.log(updateID)
  locationsApi.locationShow(updateID)
    .then(populateUpdateForm)
    .catch(locationsUI.locationUpdateFailure)
}

const populateUpdateForm = function (response) {
  $('#newcontent').html('')
  console.log(response)
  const updateLocationsHtml = updateLocationForm({ locations: response })
  $('#newcontent').html(updateLocationsHtml)
  $('#location-update-form').on('submit', locationsEvents.onLocationUpdate)
}

const addHandlers = () => {
  $('body').on('click', '.location-update', identifyLocToUpdate)
  // $('body').on('click', '.route-delete', identifyRouteToRemove)
  // $('.routeDeleteConfirmButton').on('click', removeRoute)
}

module.exports = {
  addHandlers
}
