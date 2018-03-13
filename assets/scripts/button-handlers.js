'use strict'

const showUserActions = function () {
  $('.user-actions').show()
  $('.location-actions').hide()
  $('.route-actions').hide()
  $('#newcontent').html('')
  $('#route-actions-button').removeClass('active')
  $('#user-actions-button').addClass('active')
  $('#location-actions-button').removeClass('active')
}

const showLocationActions = function () {
  $('.user-actions').hide()
  $('.location-actions').show()
  $('.route-actions').hide()
  $('#route-actions-button').removeClass('active')
  $('#user-actions-button').removeClass('active')
  $('#location-actions-button').addClass('active')
  $('#newcontent').html('')
}

const showRouteActions = function () {
  $('.user-actions').hide()
  $('.location-actions').hide()
  $('.route-actions').show()
  $('#newcontent').html('')
  $('#route-actions-button').addClass('active')
  $('#user-actions-button').removeClass('active')
  $('#location-actions-button').removeClass('active')
}

const addHandlers = function () {
  $('#user-actions-button').on('click', showUserActions)
  $('#location-actions-button').on('click', showLocationActions)
  $('#route-actions-button').on('click', showRouteActions)
}

module.exports = {
  addHandlers
}
