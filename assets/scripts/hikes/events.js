'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store.js')

const onGetHikes = (event) => {
  event.preventDefault()
  api.getHikes()
    .then(ui.getHikesSuccess)
    .catch(ui.failure)
}
const onCreateHikes = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createHikes(data)
    .then(ui.getCreateSuccess)
    .then(() => onGetHikes(event))
    .catch(ui.failure)
  console.log('Hike Created')
}
const onGetHike = (event) => {
  event.preventDefault()
  api.getHike()
    .then(ui.getHikesSuccess)
    .catch(ui.failure)
}

const onUpdateHikes = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.id = $(event.target).data('id')
  api.updateHike(data)
    .then(ui.getUpdateSuccess)
    .then(() => onGetHikes(event))
    .catch(ui.failure)
}

const onDeleteHikes = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(event)
  api.deleteHike(id)
    .then(ui.getDeleteSuccess)
    .then(() => onGetHikes(event))
    .catch(ui.failure)
}

const onClearHikes = (event) => {
  event.preventDefault()
  ui.clearHikes()
}

const addHandlers = () => {
  $('#getHikesButton').on('click', onGetHikes)
  $('#clearHikesButton').on('click', onClearHikes)
  $('#content').on('click', '.delete', onDeleteHikes)
  $('#content').on('submit', onUpdateHikes)
  $('#createHikesForm').on('submit', onCreateHikes)
}

module.exports = {
  addHandlers,
  onGetHike
}
