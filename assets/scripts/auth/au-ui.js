'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  setTimeout(function () {
    $('.response').text('')
  }, 3000)
  $('.response').text('Successful SignUp!')
  $('#sign-up').fadeOut(2000)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  setTimeout(function () {
    $('.response').text('')
  }, 3000)
  $('.response').text('Error, Try again!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  setTimeout(function () {
    $('.response').text('')
  }, 3000)
  $('.response').text('Successful LogIn!')
  $('.authen-container').fadeOut(2000)
  store.user = data.user
  $('#change-password').fadeIn(5000)
  $('change-password-container').fadeIn(5000)
  $('#sign-out').fadeIn(4000)
  $('.sign-out-container').show()
  $('.NavContent').fadeIn(4000)
  $('.MainContent').fadeIn(4000)
  $('.CreateContent').fadeIn(4000)
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  setTimeout(function () {
    $('.response').text('')
  }, 2000)
  $('.response').text('Error, Try again!')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  setTimeout(function () {
    $('.changeAlert').text('')
  }, 3000)
  $('#change-password').show()
  $('.changeAlert').text('Successful')
  $('.changeAlert').show()
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  setTimeout(function () {
    $('.changeAlert').text('')
  }, 3000)
  $('.changeAlert').text('Error, try again.')
  $('.changeAlert').show()
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  setTimeout(function () {
    $('.response').text('')
  }, 3000)
  $('#sign-up').fadeIn(5000)
  $('.sign-out-container').hide()
  $('.change-password-container').hide()
  $('#sign-out').fadeOut(2000)
  $('.authen-container').fadeIn(5000)
  $('.response').text('Successful SignOut!')
  $('.NavContent').fadeOut()
  $('#change-password').fadeOut(2000)
  $('.CreateContent').fadeOut(2000)
  $('.CreateContent').hide()
  $('.NavContent').hide()
  $('.MainContent').fadeOut(2000)
  $('.content').empty()
  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#sign-out').text('Error, try again!')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
