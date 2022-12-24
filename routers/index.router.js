const express = require('express')
const assetsRouter = require('./assets.router');

const routes = (app)=>{
    const v1Router = express.Router()
    
    v1Router.use('/assets',assetsRouter);

    app.use('/v1/',v1Router)
}

module.exports = routes