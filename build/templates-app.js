angular.module('templates-app', ['books/book/book.tpl.html', 'books/book/bookModal.tpl.html', 'books/books.tpl.html', 'cart/cart.tpl.html']);

angular.module("books/book/book.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("books/book/book.tpl.html",
    "<div>\n" +
    "    \n" +
    "<div ng-click=\"bookClick($event)\" class=\"bookContainer\">\n" +
    "    \n" +
    "    <div class=\"bookTile\">\n" +
    "        \n" +
    "        <div class=\"bookTitle\">\n" +
    "            {{book.bookTitle}}\n" +
    "        </div>\n" +
    "        <div class=\"bookImage\">\n" +
    "            \n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"bookDetails\">\n" +
    "            <div class=\"author\"><b>By : {{book.author}}</b></div>\n" +
    "            <div class=\"year\">2011</div>\n" +
    "            <div class=\"pages\">489 pages</div>\n" +
    "            \n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"purchaseDetails\">\n" +
    "            \n" +
    "            \n" +
    "            <div class=\"price\">\n" +
    "                ${{book.price}}         \n" +
    "            </div>\n" +
    "            \n" +
    "            <div ng-if=\"!book.bought\" class=\"buyLink\">\n" +
    "                \n" +
    "                <a href=\"#\" ng-click=\"addToCart($event)\">add to cart</a>\n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "            <div ng-if=\"book.bought\" class=\"removeLink\">\n" +
    "                \n" +
    "                <a href=\"#\" ng-click=\"removeFromCart($event)\">remove from cart</a>\n" +
    "                \n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"hrLine\"></div>\n" +
    "        \n" +
    "        <div class=\"bookDescription\">\n" +
    "            \n" +
    "           {{book.description}}\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("books/book/bookModal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("books/book/bookModal.tpl.html",
    "<div class=\"modal-header h4\">\n" +
    "\n" +
    "    {{book.bookTitle}}\n" +
    "    <div class=\"close\" aria-hidden=\"true\" ng-click=\"$close(result)\">x</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "\n" +
    "       <div class=\"bookImageContainer\">\n" +
    "        <div class=\"bookImage\">\n" +
    "            \n" +
    "            \n" +
    "        </div>\n" +
    "        </div>\n" +
    "        <div class=\"bookDetails\">\n" +
    "            <div class=\"author\"><b>By : {{book.author}}</b></div>\n" +
    "            <div class=\"year\">2011</div>\n" +
    "            <div class=\"pages\">489 pages</div>\n" +
    "            \n" +
    "        <div class=\"purchaseDetails\">\n" +
    "            \n" +
    "            \n" +
    "            <div class=\"price\">\n" +
    "                     ${{book.price}}         \n" +
    "            </div>\n" +
    "            \n" +
    "\n" +
    "        </div>\n" +
    "        \n" +
    "     <div class=\"bookDescription\">\n" +
    "            \n" +
    "         {{book.description}}\n" +
    "            \n" +
    "        </div>\n" +
    "        \n" +
    "             \n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-default cancelButton\" ng-click=\"$close(result)\">Cancel</button>\n" +
    "<button ng-if=\"!book.bought\" class=\"btn btn-primary cartButton\" ng-click=\"addToCart($event)\">Add to Cart</button>\n" +
    "<button ng-if=\"book.bought\" class=\"btn btn-primary cartButton\" ng-click=\"removeFromCart($event)\">Remove from Cart</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("books/books.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("books/books.tpl.html",
    "<div class=\"mainContainer\">\n" +
    "<div class=\"alertContainer\">\n" +
    "<div alert class=\"alert\" ng-mouseenter=\"dontCloseAlert(bookAlerts[$index])\" close=\"closeAlert($index)\" ng-repeat = \"alert in bookAlerts.slice().reverse()\"> \n" +
    "   \n" +
    "     {{alert.book.bookTitle}} has been added to your cart.\n" +
    "    \n" +
    "    <br/>\n" +
    "    <a href=\"#\" ng-click=\"removeFromCart($event, alert.book)\">Remove from Cart</a>\n" +
    "    <br/>\n" +
    "    <a href=\"#/cart\">Modify Quantity</a>\n" +
    " </div>\n" +
    "    </div>\n" +
    "    \n" +
    "<div class=\"bookColContainer\" ng-repeat=\"colContainer in bookColContainers\">\n" +
    "<div class=\"bookContainer\" ng-repeat = \"book in books | bookFilter : colContainer:bookColContainers.length\">\n" +
    "    \n" +
    "    <div pbook></div>\n" +
    "    \n" +
    "    </div>\n" +
    "</div>\n" +
    "    \n" +
    "    </div>");
}]);

angular.module("cart/cart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("cart/cart.tpl.html",
    "<div class=\"container h3\" ng-if=\"!cartBooks.length\"><p>No books bought yet !</p>\n" +
    "<a href=\"#home\">Click here to go to the store</a>\n" +
    "</div>\n" +
    "<div ng-if=\"cartBooks.length\" class=\"container table-responsive\">\n" +
    "<table class=\"table\">\n" +
    "\n" +
    "    <tr class=\"tableHead\">\n" +
    "        <th class=\"col-sm-8\">Item</th>\n" +
    "        <th class=\"col-sm-3\">Qty</th>\n" +
    "        <th class=\"col-sm-1\">Price</th>\n" +
    "    </tr>\n" +
    "    <tr ng-repeat = \"book in cartBooks\">\n" +
    "        <td><b>{{book.bookTitle}}</b><br/>by : {{book.author}} <a href=\"#\" ng-click=\"removeFromCart(book,$event)\">(remove)</a></td>\n" +
    "        <td>\n" +
    "        <select ng-change=\"updateQ()\" ng-model=\"cartBooks[$index].qty\" ng-options = \"q for q in [1,2,3,4,5]\">\n" +
    "            \n" +
    "            </select>\n" +
    "        </td>\n" +
    "        <td>${{book.price}}</td>\n" +
    "    </tr>\n" +
    "\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "<table class=\"extraInfo col-sm-12\">\n" +
    "    \n" +
    "    <tr>\n" +
    "    <td class=\"col-sm-11\">tax :</td>\n" +
    "    <td class=\"value col-sm-1\">${{cartTax}}</td>\n" +
    "    </tr> \n" +
    "    \n" +
    "    <tr>\n" +
    "    <td class=\"col-sm-11\">shipping :</td>\n" +
    "    <td class=\"value col-sm-1\">${{cartShipping}}</td>\n" +
    "    </tr> \n" +
    "    \n" +
    "    <tr>\n" +
    "    <td class=\"col-sm-11\"><b>total :</b></td>\n" +
    "    <td class=\"value col-sm-1\"><b>${{cartTotal}}</b></td>\n" +
    "    </tr> \n" +
    "</table>\n" +
    "<div class=\"cartButtonContainer\">\n" +
    "<button class=\"btn btn-default cartButtons\" ng-click=\"clearCart()\">Clear Cart</button>\n" +
    "<button class=\"btn btn-primary cartButtons\">Checkout</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
