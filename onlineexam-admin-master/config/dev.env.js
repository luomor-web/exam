'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/api"',
  BASE_WEBSOCKET: '"ws://121.199.60.115:8088/api/websocket/"'
})
