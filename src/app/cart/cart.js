angular.module( 'cart', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'pearsonApp',
  'alerts'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'cart', {
    url: '/cart',
    views: {
      "main": {
        controller: 'CartCtrl',
        templateUrl: 'cart/cart.tpl.html'
      }
    },
    data:{ pageTitle: 'Shopping Cart' }
  });
})

.controller( 'CartCtrl',function CartCtrl( $scope, cartService ) {

    $scope.cartBooks = cartService.books;
    $scope.cartTotal = cartService.calculateTotal();
    $scope.cartTax = cartService.tax;
    $scope.cartShipping = cartService.shipping;
    
    $scope.clearCart = function(){
        cartService.removeAll();
        $scope.cartTotal = cartService.calculateTotal();
    };
    
    $scope.updateQ = function(){
        $scope.cartTotal = cartService.calculateTotal();
    };
    
    $scope.removeFromCart = function(book,$event){
        $event.preventDefault();
        $event.stopPropagation();
        cartService.removeFromCart(book);
        $scope.cartTotal = cartService.calculateTotal();
    };
})
.factory('cartService',function(alertService, $rootScope){

    var cart = {};
    
    //container for the books in the cart
    cart.books = [];
    cart.tax = 2.59;
    cart.shipping = 6.99;
    cart.addToCart = function(book){
        cart.books.push(book);
        $rootScope.totalItems = cart.books.length;
        console.log($rootScope.totalItems);
    }; 

    /*This function takes a book as an input and checkes to see if there 
    is any book in the container with the same book number. 
    If there is such a book then it deletes it.
    */
    cart.removeFromCart = function(book){
        
        cart.books.forEach(function(b,i){
            if(b.number == book.number){
                cart.books[i].bought = false;
                cart.books[i].qty = 1;
                removed = cart.books.splice(i,1);
            }
        //removing the corresponding alert.
        alertService.removeAlert(book);
        });
        $rootScope.totalItems = cart.books.length;

    };

    //calling the previous function for every book in the container
    cart.removeAll = function(){
        for(var i=0; i<cart.books.length; i++) 
        {
            cart.removeFromCart(cart.books[i--]);
        }
    };

    //This function calculates the total by multiplying the quanity with price for each book.
    cart.calculateTotal = function(){
        var total = 0;
        cart.books.forEach(function(book,i){
            total += book.qty * book.price;
        });
        
        total += cart.tax + cart.shipping;
        
        return total.toFixed(2) ;
    };

    //Return the cart object to be used elsewhere
    return cart;


});