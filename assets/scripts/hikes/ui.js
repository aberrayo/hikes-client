'use strict'

const showHikesTemplate = require('../templates/hike-listing.handlebars')

const getHikesSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CrudAlerts').text('')
  }, 3000)
}

const getCreateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CreateAlert').text('')
    $('form').trigger('reset')
  }, 3000)
  $('.CreateAlert').text('Successfully Created')
}

const getUpdateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CreateAlert').text('')
    $('form').trigger('reset')
  }, 3000)
  $('.CreateAlert').text('Successfully Updated')
}

const getDeleteSuccess = (data) => {
  setTimeout(function () {
    $('form').trigger('reset')
    $('.CreateAlert').text('')
  }, 3000)
  $('.CreateAlert').text('Successfully Deleted')
}
const clearHikes = () => {
  $('.content').empty()
}

/* const failure = (error) => {
} */

module.exports = {
  getHikesSuccess,
  getCreateSuccess,
  getUpdateSuccess,
  getDeleteSuccess,
  clearHikes
  // failure
}
