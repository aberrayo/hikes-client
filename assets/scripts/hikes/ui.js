'use strict'

const showHikesTemplate = require('../templates/hike-listing.handlebars')

const getHikesSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  console.log(data)
}
const getCreateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  console.log(data)
}
const getUpdateSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  console.log(data)
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
  clearHikes
  // failure
}
