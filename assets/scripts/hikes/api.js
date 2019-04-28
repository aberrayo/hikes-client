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
const createHikes = function (hikeData) {
  return $.ajax({
    url: config.apiUrl + '/hikes',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: hikeData
  })
}

const updateHike = function (updateData) {
  return $.ajax({
    url: config.apiUrl + `/hikes/${store.id}`,
    method: 'PATCH',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: updateData
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
