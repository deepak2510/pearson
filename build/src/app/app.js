angular.module('pearsonApp', [
  'templates-app',
  'templates-common',
  'books',
  'cart',
  'ui.router'
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/books');
  }
]).run([
  '$rootScope',
  function run($rootScope) {
    $rootScope.totalItems = 0;
  }
]).controller('AppCtrl', [
  '$scope',
  '$location',
  function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (angular.isDefined(toState.data.pageTitle)) {
        $scope.pageTitle = toState.data.pageTitle;
      }
    });
  }
]);