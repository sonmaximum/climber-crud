'use strict'

const indexRoutesTemplate = require('../templates/route-listing.handlebars')

const routeTypeArray = ['Boulder', 'Top Rope', 'Lead', 'Sport', 'Trad.']

const routeIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Index Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeShowSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Succeeded')
  data.route.route_type = routeTypeArray[data.route.route_type]
  const showRoutesHtml = indexRoutesTemplate({ routes: data })
  $('#newcontent').html('')
  $('#newcontent').append(showRoutesHtml)
}

const routeShowFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Failed')
  if (error.status === 404) {
    $('#message').text('No Matches Found!')
  }
  $('#newcontent').html('')
  console.log(error)
}

const routeDeleteSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Delete Succeeded')
  $('#newcontent').html('')
  console.log(data)
}

const routeDeleteFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Delete Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeCreateSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Create Succeeded')
  $('#newcontent').html('')
  console.log(data)
}

const routeCreateFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Create Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeUpdateSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Update Succeeded')
  $('#newcontent').html('')
  console.log(data)
}

const routeUpdateFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Update Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeShowByTypeSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show By Type Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeShowByTypeFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show By Type Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeShowByLocationSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show By Location Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeShowByLocationFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show By Location Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeMyIndexSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('My Routes Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeMyIndexFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('My Routes Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeMyShowByTypeSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('My Routes By Type Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeMyShowByTypeFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('My Routes By Type Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeMyShowByLocationSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('My Routes By Type Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeMyShowByLocationFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('My Routes By Type Failed')
  $('#newcontent').html('')
  console.log(error)
}

const routeAttemptedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Attempted Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeAttemptedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Attempted Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeCompletedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Completed Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeCompletedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Completed Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeSentSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Sent Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeSentFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Sent Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeProjectSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Projects Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeProjectFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show Projects Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeNotAttemptedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-attempted Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotAttemptedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-attempted Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeNotCompletedSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-completed Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotCompletedFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-completed Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeNotSentSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-sent Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotSentFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-sent Failed')
  $('#newcontent').html('')
  console.log(error)
}
const routeNotProjectSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-projects Succeeded')
  console.table(data.routes)
  data.routes.forEach(function (route) {
    route.route_type = routeTypeArray[route.route_type]
  })
  const indexRoutesHtml = indexRoutesTemplate({ routes: data.routes })
  $('#newcontent').html('')
  $('#newcontent').append(indexRoutesHtml)
}

const routeNotProjectFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Show non-projects Failed')
  $('#newcontent').html('')
  console.log(error)
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
