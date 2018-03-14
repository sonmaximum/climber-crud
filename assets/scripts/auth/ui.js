'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#sign-up-success').modal('show')
  $('#newcontent').html('')
}

const signUpFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#sign-up-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}

const signInSuccess = function (data) {
  store.user = data.user
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('.hide-when-signed-in').hide()
  $('.user-actions').show()
  $('.location-actions').hide()
  $('.route-actions').hide()
  $('.right-side').hide()
  $('.hide-when-signed-out').show()
  $('#newcontent').html('')
}

const signInFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#sign-in-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}

const changePasswordSuccess = function () {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#change-password-success').modal('show')
  $('#newcontent').html('')
}

const changePasswordFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#change-password-failure').modal('show')
  store.error = error
  $('#newcontent').html('')
}
const signOutSuccess = function () {
  $('#logout-success').modal('show')
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('.hide-when-signed-out').hide()
  $('.hide-when-signed-in').show()
  $('#newcontent').html('')
  store.user = null
}

const signOutFailure = function (error) {
  $('form').find('input:not([type="submit"]):not([type="radio"])').val('')
  $('input:radio').prop('checked', false)
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#newcontent').html('')
  store.error = error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
