'use strict'

const showUserActions = function () {
  $('.user-actions').show()
  $('.location-actions').hide()
  $('.route-actions').hide()
  $('#newcontent').html('')
}

const showLocationActions = function () {
  $('.user-actions').hide()
  $('.location-actions').show()
  $('.route-actions').hide()
  $('#newcontent').html('')
}

const showRouteActions = function () {
  $('.user-actions').hide()
  $('.location-actions').hide()
  $('.route-actions').show()
  $('#newcontent').html('')
}

const addHandlers = function () {
  $('#user-actions-button').on('click', showUserActions)
  $('#location-actions-button').on('click', showLocationActions)
  $('#route-actions-button').on('click', showRouteActions)
}

module.exports = {
  addHandlers
}
