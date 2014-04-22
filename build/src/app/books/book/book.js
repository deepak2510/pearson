angular.module('book', [
  'ui.router',
  'ui.bootstrap',
  'cart',
  'alerts'
]).directive('pbook', [
  '$modal',
  'cartService',
  'alertService',
  function ($modal, cartService, alertService) {
    return {
      restrict: 'AE',
      templateUrl: 'books/book/book.tpl.html',
      link: function (scope, element, attr) {
        scope.addToCart = function ($event) {
          $event.preventDefault();
          $event.stopPropagation();
          scope.book.bought = true;
          cartService.addToCart(scope.book);
          alertService.createAlert({}, scope.book);
        };
        scope.removeFromCart = function ($event) {
          $event.preventDefault();
          $event.stopPropagation();
          scope.book.bought = false;
          cartService.removeFromCart(scope.book);
          alertService.removeAlert(scope.book);
        };
        scope.bookClick = function ($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $modal.open({
            templateUrl: 'books/book/bookModal.tpl.html',
            scope: scope
          });
        };
      }
    };
  }
]);