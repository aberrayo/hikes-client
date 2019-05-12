'use strict'

const showHikesTemplate = require('../templates/hike-listing.handlebars')

const getHikesSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CreateAlert').text('')
  }, 3000)
  if (showHikesHtml === '') {
    $('.CreateAlert').text('Nothing to show')
  } else {
    $('.CreateAlert').text('Successful')
  }
}

const getCreateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CreateUpdate').text('')
    $('form').trigger('reset')
  }, 3000)
  $('.CreateUpdate').text('Created')
}

const getUpdateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  setTimeout(function () {
    $('.CreateUpdate').text('')
    $('form').trigger('reset')
  }, 3000)
  $('.CreateUpdate').text('Updated')
}

const getDeleteSuccess = (data) => {
  setTimeout(function () {
    $('form').trigger('reset')
    $('.CreateUpdate').text('')
  }, 3000)
  $('.CreateUpdate').text('Deleted')
}
const clearHikes = () => {
  $('.content').empty()
  setTimeout(function () {
    $('.CreateUpdate').text('')
  }, 3000)
  $('.CreateUpdate').text('Cleared')
}
module.exports = {
  getHikesSuccess,
  getCreateSuccess,
  getUpdateSuccess,
  getDeleteSuccess,
  clearHikes
}
