'use strict'

const config = require('../config')
const store = require('./../store.js')

const getHikes = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/hikes',
    headers: {Authorization: 'Token token=' + store.user.token}
  })
}

const getHike = function (id) {
  return $.ajax({
    url: config.apiUrl + `/hikes/${id}`,
    headers: {Authorization: 'Token token=' + store.user.token},
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

const updateHike = function (data) {
  return $.ajax({
    url: config.apiUrl + `/hikes/${store.id}`,
    method: 'PATCH',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: data
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
