//This file defines the directive for a single book and its dependencies.
angular.module( 'book', [
  'ui.router',
  'ui.bootstrap',
  'cart',
  'alerts'
])

.directive('pbook',function($modal, cartService, alertService){

    return{
        restrict : 'AE',
        templateUrl : 'books/book/book.tpl.html',
        link : function(scope, element, attr){
            
            /*Functions for adding and removing a book from cart. It utilizes the cartService function to add a book to cart. It also calls the alertService for displaying an alert. The bought status of each book is tracked via scope.book.bought*/
            
            scope.addToCart = function($event){
                $event.preventDefault();
                $event.stopPropagation();
                scope.book.bought = true;   
                cartService.addToCart(scope.book);
                alertService.createAlert({},scope.book);

            };

            scope.removeFromCart = function($event){ 
                $event.preventDefault();
                $event.stopPropagation();
                scope.book.bought = false;
                cartService.removeFromCart(scope.book);
                alertService.removeAlert(scope.book);                 
            };
        //Modal on tile click. The modal takes a scope value of 'scope' which is equal to the current book scope.
            
            
            scope.bookClick = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $modal.open({
                    templateUrl : 'books/book/bookModal.tpl.html',
                    scope : scope 
                });

            };  

        }    

    };

});

