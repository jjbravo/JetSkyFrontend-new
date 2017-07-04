'use strict';

angular.module('jetSkyApp', [
	'jetSkyApp.constants',
	'ngCookies',
	'ngResource', 
	'ngSanitize',
    'ui.router'
  ])
  .constant('API','http://localhost:25956/JetSky')
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
