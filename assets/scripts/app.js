'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const hikeEvents = require('./hikes/events.js')
const authEvents = require('./auth/au-events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  hikeEvents.addHandlers()
  authEvents.addHandlers()
})
