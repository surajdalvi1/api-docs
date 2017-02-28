/*!
 * myplugin
 */

 "use strict";

/*!
 * Module dependencies
 */
var contentstack =  require('contentstack-express');
var path=require('path');
var config=contentstack.config;
module.exports = function Myplugin() {

   var options = Myplugin.options;

   Myplugin.templateExtends = function(engine) {
   };
   Myplugin.serverExtends = function(app) {
       app.get('/cda',function(req, res, next){
           var tempath=config.get('path.templates');
           res.render(path.join(tempath,'pages','cda','index.html'))
       })
       app.get('/cma',function(req, res, next){
           var tempath=config.get('path.templates');
           res.render(path.join(tempath,'pages','cma','index.html'))
       })
       app.locals.getPath = function () {
           return window.location.pathname;
       };
   };

   Myplugin.beforePublish = function (data, next) {
       next();
   };

   Myplugin.beforeUnpublish = function (data, next) {
       next();
   };
};