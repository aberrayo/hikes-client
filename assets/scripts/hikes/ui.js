'use strict'

const showHikesTemplate = require('../templates/hike-listing.handlebars')

const getHikesSuccess = (data) => {
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  console.log(data)
}

const clearHikes = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getHikesSuccess,
  clearHikes,
  failure
}
