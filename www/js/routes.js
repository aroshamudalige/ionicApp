angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('addPatient', {
    url: '/page2',
    templateUrl: 'templates/addPatient.html',
    controller: 'addPatientCtrl'
  })

  .state('removePatient', {
    url: '/page3',
    templateUrl: 'templates/removePatient.html',
    controller: 'removePatientCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('welcome', {
    url: '/page7',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('sendAMessage', {
    url: '/page8',
    templateUrl: 'templates/sendAMessage.html',
    controller: 'sendAMessageCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});