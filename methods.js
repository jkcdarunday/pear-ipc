'use strict'
const methods = [
  { id: 0, name: 'info', stream: true },
  { id: 1, name: 'dump', stream: true },
  { id: 2, name: 'seed', stream: true },
  { id: 3, name: 'stage', stream: true },
  { id: 4, name: 'release', stream: true },
  { id: 5, name: 'messages', stream: true },
  { id: 6, name: 'message' },
  { id: 7, name: 'config' },
  { id: 8, name: 'checkpoint' },
  { id: 9, name: 'versions' },
  { id: 10, name: 'address' },
  { id: 11, name: 'detached' },
  { id: 12, name: 'trust' },
  { id: 13, name: 'identify' },
  { id: 14, name: 'wakeup' },
  { id: 15, name: 'warming', stream: true },
  { id: 16, name: 'warmup' },
  { id: 17, name: 'start' },
  { id: 18, name: 'restart' },
  { id: 19, name: 'unloading' },
  { id: 20, name: 'closeClients' },
  { id: 21, name: 'createReport' },
  { id: 22, name: 'reports', stream: true },
  { id: 23, name: 'shutdown', send: true },
  { id: 24, name: 'setPreference' },
  { id: 25, name: 'getPreference' },
  { id: 26, name: 'iteratePreferences', stream: true },
  { id: 27, name: 'preferences', stream: true },
  { id: 28, name: 'shift', stream: true }
]

module.exports = methods
