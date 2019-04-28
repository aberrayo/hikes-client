'use strict'

const showHikesTemplate = require('../templates/hike-listing.handlebars')

const getHikesSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CrudAlerts').text('')
  }, 3000)
  $('.CrudAlerts').text('Successfull')
}
const getCreateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CrudAlerts').text('')
  }, 3000)
  $('.CrudAlerts').text('Successfully Created')
  $('.CreateContent').trigger('reset')
}
const getUpdateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CrudAlerts').text('')
  }, 3000)
  $('.CrudAlerts').html('Successfully Updated')
  $('form').trigger('reset')
}

const getDeleteSuccess = (data) => {
  setTimeout(function () {
    $('.CrudAlerts').text('')
  }, 500)
  $('.CrudAlerts').html('Successfully Deleted')
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
