'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up-form').find('input:not([type="submit"])').val('')
  $('#sign-up-success').modal('show')
  $('#message').text('Sign up succeeded')
}

const signUpFailure = function (error) {
  $('#sign-up-form').find('input:not([type="submit"])').val('')
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
  $('#sign-in-form').find('input:not([type="submit"])').val('')
  $('#message').text('Sign in succeeded')

  // $('#sign-in-success').modal('show')  Don't need to show modal as interface changes on signin
}

const signInFailure = function (error) {
  $('#sign-in-form').find('input:not([type="submit"])').val('')
  $('#sign-in-failure').modal('show')
  $('#message').text('Sign in failed')
  store.error = error
}

const changePasswordSuccess = function () {
  $('#change-password-form').find('input:not([type="submit"])').val('')
  $('#change-password-success').modal('show')
  $('#message').text('CPW suceeded')
}

const changePasswordFailure = function (error) {
  $('#change-password-form').find('input:not([type="submit"])').val('')
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
  store.user = null
}

const signOutFailure = function (error) {
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
