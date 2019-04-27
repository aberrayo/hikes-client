'use strict'

const config = require('../config')
const store = require('./../store.js')

const getHikes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/hikes'
  })
}

const getHike = function (id) {
  return $.ajax({
    url: config.apiUrl + `/hikes/${id}`,
    method: 'GET'
  })
}
const createHikes = function (data) {
  return $.ajax({
    url: config.apiUrl + '/hikes',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {
      'hikes': {
        'location': data.hikes.location,
        'trail_name': data.hikes.trail_name,
        'distance_miles': data.hikes.distance_miles,
        'date': data.hikes.date
      }
    }
  })
}

const updateHike = function (id) {
  return $.ajax({
    url: config.apiUrl + `/hikes/${id}`,
    method: 'PATCH',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {
      'hikes': {
        'location': 'location',
        'trail_name': 'trail_name',
        'distance_miles': 'distance_miles',
        'date': 'date'
      }
    }

  })
}
const deleteHike = function (id) {
  return $.ajax({
    url: config.apiUrl + `/hikes/${id}`,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getHikes,
  deleteHike,
  getHike,
  createHikes,
  updateHike
}
