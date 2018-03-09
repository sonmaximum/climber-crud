'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#sign-up-success').modal('show')
  $('#message').text('Sign up succeeded')
}

const signUpFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#sign-up-failure').modal('show')
  $('#message').text('Sign up failed')
  store.error = error
}

const signInSuccess = function (data) {
  store.user = data.user
  // $('.init').css('visibility', 'visible')
  // $('.board, .instructions').css('visibility', 'hidden')
  // $('.maincontent').css('display', 'flex')
  // $('.hidewhenloggedin').hide()
  // $('#username').text(data.user.email)
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#message').text('Sign in succeeded')
  $('.hide-when-signed-in').hide()
  $('.hide-when-signed-out').show()
  // $('#sign-in-success').modal('show')  Don't need to show modal as interface changes on signin
}

const signInFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#sign-in-failure').modal('show')
  $('#message').text('Sign in failed')
  store.error = error
}

const changePasswordSuccess = function () {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#change-password-success').modal('show')
  $('#message').text('CPW suceeded')
}

const changePasswordFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#change-password-failure').modal('show')
  store.error = error
  $('#message').text('CPW failed')
}
const signOutSuccess = function () {
  // $('#logout-success').modal('show')
  // $('.hidewhenloggedin').show()
  // $('.init, .board, .instructions, .user-feedback-message').css('visibility', 'hidden')
  // $('.maincontent').css('display', 'none')
  $('#message').text('Sign out succeeded')
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('.hide-when-signed-out').hide()
  $('.hide-when-signed-in').show()
  store.user = null
}

const signOutFailure = function (error) {
  $('form').find('input:not([type="submit"])').val('')
  $('select').each(function () { this.selectedIndex = 0 })
  $('#generic-failure').modal('show')
  $('#message').text('Sign out failed')
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
