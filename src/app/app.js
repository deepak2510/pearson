
//Loading the books and cart modules
angular.module( 'pearsonApp', [
  'templates-app',
  'templates-common',
  'books',
  'cart',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/books' );
})

.run( function run ($rootScope) {
    
    $rootScope.totalItems = 0;
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle;
    }
  });
    
  
});