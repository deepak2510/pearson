angular.module('books', [
  'ui.router',
  'ui.bootstrap',
  'book',
  'cart',
  'alerts'
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('books', {
      url: '/books',
      views: {
        'main': {
          controller: 'BooksCtrl',
          templateUrl: 'books/books.tpl.html'
        }
      },
      data: { pageTitle: 'Browse Books' }
    });
  }
]).controller('BooksCtrl', [
  '$scope',
  '$window',
  'booksService',
  'cartService',
  'alertService',
  '$modal',
  '$rootScope',
  '$timeout',
  function BooksController($scope, $window, booksService, cartService, alertService, $modal, $rootScope, $timeout) {
    $scope.books = booksService.books;
    $scope.bookAlerts = alertService.alerts;
    $window.onresize = function () {
      $scope.$apply(function () {
        $scope.calcContainers();
      });
    };
    $scope.bookColContainers = [];
    $scope.calcContainers = function () {
      colWidth = 260;
      windowWidth = $window.innerWidth;
      numberOfCols = parseInt(windowWidth / colWidth, 10);
      $scope.bookColContainers = new Array(numberOfCols);
      for (var i = 0; i < $scope.bookColContainers.length; i++) {
        $scope.bookColContainers[i] = i;
      }
    };
    $scope.closeAlert = function (i) {
      alertService.removeAlert(i);
    };
    $scope.dontCloseAlert = function (alert) {
      alertService.persistAlert(alert);
    };
    $scope.removeFromCart = function ($event, b) {
      $event.preventDefault();
      $event.stopPropagation();
      cartService.removeFromCart(b);
      alertService.removeAlert(b);
    };
    $scope.calcContainers();
  }
]).filter('bookFilter', function () {
  return function (books, colContainer, length) {
    ar = [];
    for (var book = 0; book < books.length; book++) {
      if (books[book].number % length == colContainer) {
        ar.push(books[book]);
      }
    }
    return ar;
  };
}).factory('booksService', function () {
  var books = [
      {
        number: 0,
        bought: false,
        bookTitle: 'Guide to business management',
        price: 39.99,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist.',
        author: 'Sam Jackson Jr'
      },
      {
        number: 1,
        bought: false,
        bookTitle: 'Algebra I',
        price: 25,
        qty: 1,
        description: 'Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Sam Jr'
      },
      {
        number: 2,
        bought: false,
        bookTitle: 'Algebra II',
        price: 45,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five  possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Math Teacher'
      },
      {
        number: 3,
        bought: false,
        bookTitle: 'Algebra III',
        price: 25,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility.',
        author: 'Algebra Teacher'
      },
      {
        number: 4,
        bought: false,
        bookTitle: 'Math I',
        price: 95,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Cool'
      },
      {
        number: 5,
        bought: false,
        bookTitle: 'Math II',
        price: 55,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Good Author'
      },
      {
        number: 6,
        bought: false,
        bookTitle: 'Math III',
        price: 47,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Jackson'
      },
      {
        number: 7,
        bought: false,
        bookTitle: 'Physics I',
        price: 35,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Sam Jackson Jr'
      },
      {
        number: 8,
        bought: false,
        bookTitle: 'Physics II',
        price: 25,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Sam Jackson Jr'
      },
      {
        number: 9,
        bought: false,
        bookTitle: 'Chemistry I',
        price: 15,
        qty: 1,
        description: 'Discover how modern business giants such as Herb Kelleher of Southwest Airlines, Gordon Moore of Intel, and Earl Bakken of Medtronic have developed enterprises with soul by applying the five strategic arts of possibility, timing, leverage, mastery, and leadership outlined by the ancient strategist Sun Tzu in The Art of War.',
        author: 'Sam Jackson Jr'
      }
    ];
  var booksObj = {};
  booksObj.books = books;
  return booksObj;
});
;