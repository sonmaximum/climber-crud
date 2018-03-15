'use strict'

const indexRoutesTemplate = require('../templates/route-listing.handlebars')
const editRoutesTemplate = require('../templates/route-editing.handlebars')
const compare = require('../customsorter.js')
const store = require('../store')

const routeTypeArray = ['Boulder', 'Top Rope', 'Lead', 'Sport', 'Trad.']

const routeIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>All Routes</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeShowSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.route.route_type = routeTypeArray[data.route.route_type]
  const showRoutesHtml = indexRoutesTemplate({ routes: data })
  $('#newcontent').html('')
  $('#newcontent').append(showRoutesHtml)
}

const routeShowFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  if (error.status === 404) {
    $('#newcontent').html('No Matches Found!')
  } else {
    $('#generic-failure').modal('show')
  }
  store.error = error
}

const routeDeleteSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('<h3> Success! Location Deleted</h3>')
}

const routeDeleteFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeCreateSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.route.route_type = routeTypeArray[data.route.route_type]
  const createRouteHtml = indexRoutesTemplate({ routes: data })
  $('#newcontent').html('<h3>Success!  Route Created</h3>')
  $('#newcontent').append(createRouteHtml)
}

const routeCreateFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeUpdateSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.route.route_type = routeTypeArray[data.route.route_type]
  const createRouteHtml = indexRoutesTemplate({ routes: data })
  $('#newcontent').html('<h3>Success!  Route Updated</h3>')
  $('#newcontent').append(createRouteHtml)
}

const routeUpdateFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeShowByTypeSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  if (data.routes[0]) {
    $('#newcontent').html('<h3>All ' + data.routes[0].route_type + ' Routes</h3>')
  }
  $('#newcontent').append(indexRoutesHtml)
}

const routeShowByTypeFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeShowByLocationSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  if (data.routes[0]) {
    $('#newcontent').html('<h3>All Routes at ' + data.routes[0].location.name + '</h3>')
  }
  $('#newcontent').append(indexRoutesHtml)
}

const routeShowByLocationFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeMyIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>My Logged Routes</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeMyIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeMyShowByTypeSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  if (data.routes[0]) {
    $('#newcontent').html('<h3>My ' + data.routes[0].route_type + ' Routes</h3>')
  }
  $('#newcontent').append(indexRoutesHtml)
}

const routeMyShowByTypeFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeMyShowByLocationSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  if (data.routes[0]) {
    $('#newcontent').html('<h3>My Routes at ' + data.routes[0].location.name + '</h3>')
  }
  $('#newcontent').append(indexRoutesHtml)
}

const routeMyShowByLocationFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

const routeAttemptedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>Routes I\'ve Attempted</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeAttemptedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeCompletedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>Routes I\'ve Completed</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeCompletedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeSentSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>Routes I\'ve Sent</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeSentFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeProjectSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>My Projects</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeProjectFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeNotAttemptedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>Routes Not Yet Attempted</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotAttemptedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeNotCompletedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>Routes Not Completed</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotCompletedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeNotSentSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>Routes Not Sent</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotSentFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}
const routeNotProjectSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  data.routes.sort(compare)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = editRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('<h3>My Other Routes (non-Projects)</h3>')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotProjectFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#newcontent').html('')
  $('#generic-failure').modal('show')
  store.error = error
}

module.exports = {
  routeIndexSuccess,
  routeIndexFailure,
  routeShowSuccess,
  routeShowFailure,
  routeDeleteSuccess,
  routeDeleteFailure,
  routeCreateSuccess,
  routeCreateFailure,
  routeUpdateSuccess,
  routeUpdateFailure,
  routeShowByTypeSuccess,
  routeShowByTypeFailure,
  routeMyShowByTypeSuccess,
  routeMyShowByTypeFailure,
  routeShowByLocationSuccess,
  routeShowByLocationFailure,
  routeMyShowByLocationSuccess,
  routeMyShowByLocationFailure,
  routeMyIndexSuccess,
  routeMyIndexFailure,
  routeAttemptedSuccess,
  routeAttemptedFailure,
  routeCompletedSuccess,
  routeCompletedFailure,
  routeSentSuccess,
  routeSentFailure,
  routeProjectSuccess,
  routeProjectFailure,
  routeNotAttemptedSuccess,
  routeNotAttemptedFailure,
  routeNotCompletedSuccess,
  routeNotCompletedFailure,
  routeNotSentSuccess,
  routeNotSentFailure,
  routeNotProjectSuccess,
  routeNotProjectFailure
}
