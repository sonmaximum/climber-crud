'use strict'

const locationsApi = require('./locations/api.js')
const locationsEvents = require('./locations/events.js')
const locationsUI = require('./locations/ui.js')
const routesApi = require('./routes/api.js')
const routesEvents = require('./routes/events.js')
const routesUI = require('./routes/ui.js')

const locationDropdown = require('./locations/locationdropdown.js')

const updateLocationForm = require('./templates/location-update-form.handlebars')
const updateRouteForm = require('./templates/route-update-form.handlebars')

let updateID

const identifyLocToUpdate = function (event) {
  event.preventDefault()
  updateID = event.target.dataset.id
  locationsApi.locationShow(updateID)
    .then(populateLocUpdateForm)
    .catch(locationsUI.locationUpdateFailure)
}

const identifyRouteToUpdate = function (event) {
  event.preventDefault()
  updateID = event.target.dataset.id
  routesApi.routeShow(updateID)
    .then(populateRouteUpdateForm)
    .catch(routesUI.routeUpdateFailure)
}

const populateLocUpdateForm = function (response) {
  $('#newcontent').html('')
  const updateLocationsHtml = updateLocationForm({ locations: response })
  $('#newcontent').html(updateLocationsHtml)
  $('#location-update-form').on('submit', locationsEvents.onLocationUpdate)
}

const populateRouteUpdateForm = function (response) {
  $('#newcontent').html('')
  $('#newcontent').hide()
  const updateRoutesHtml = updateRouteForm({ routes: response })
  $('#newcontent').html(updateRoutesHtml)
  $('#updateroutetype').val(response.route.route_type)
  locationDropdown(response.route.location_id)
  $('#locationdropdown').val(response.route.location_id)
  $('#route-update-form').on('submit', routesEvents.onRouteUpdate)
}

const addHandlers = () => {
  $('body').on('click', '.location-update', identifyLocToUpdate)
  $('body').on('click', '.route-update', identifyRouteToUpdate)
}

module.exports = {
  addHandlers
}
