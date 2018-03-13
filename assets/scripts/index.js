'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const routeEvents = require('./routes/events.js')
const locationEvents = require('./locations/events.js')
const buttonEvents = require('./button-handlers.js')
const deleteEvents = require('./delete-events.js')
const updateEvents = require('./update-events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  routeEvents.addHandlers()
  locationEvents.addHandlers()
  buttonEvents.addHandlers()
  deleteEvents.addHandlers()
  updateEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
