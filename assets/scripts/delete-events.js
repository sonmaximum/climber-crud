'use strict'

const locationsApi = require('./locations/api.js')
const locationsEvents = require('./locations/events.js')
const locationsUI = require('./locations/ui.js')
// const routesApi = require('./routes/api.js')
// const routesEvents = require('./routes/events.js')
// const routesUI = require('./routes/ui.js')

let deletionID
// let currentEvent

const identifyLocToRemove = function (event) {
  event.preventDefault()
  // currentEvent = event
  deletionID = event.target.dataset.id
  $('#confirmDeleteLocationModal').modal('show')
}

const removeLoc = function (event) {
  locationsApi.locationDelete(deletionID)
    .then(locationsEvents.onLocationMaintainedIndex)
    .catch(locationsUI.locationDeleteFailure)
}

const addHandlers = () => {
  $('body').on('click', '.location-delete', identifyLocToRemove)
  $('.locationDeleteConfirmButton').on('click', removeLoc)
  // $('body').on('click', '.route-delete', identifyRouteToRemove)
  // $('.routeDeleteConfirmButton').on('click', removeRoute)
}

module.exports = {
  addHandlers
}
