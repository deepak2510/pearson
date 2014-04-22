angular.module( 'alerts', [] )

.factory('alertService',function($timeout){
    
    var alertsObj = {};
    alertsObj.alerts = [];
    
    /* Creating the alert and making sure it fades in 10 seconds unless the user hovers their mouse over it*/
    alertsObj.createAlert = function (alert, book) {
        alert.index = alertsObj.alerts.length;
        alert.book = book;
        var i = alertsObj.alerts.push(alert);
        alertsObj.alerts[i - 1].promise = $timeout(function (i) {
            alertsObj.removeAlert(i - 1);
        }, 10000);
    };

    //Remove an alert. This method can be called by passing either a book object or just an index value as well.
    alertsObj.removeAlert = function (book) {
        if (typeof book === "number") {
            alertsObj.alerts.splice(book, 1);
        }
        alertsObj.alerts.forEach(function (alert, i) {
            if (alert.book.number == book.number) {
                alertsObj.alerts.splice(i, 1);
            }
        });


    };

    /*This method makes the alert stay on the page permanently until it is closed manually by the user.This method is called using ng-mouseenter. i.e when the user's mouse pointer hovers over the 
    alert, then it stay on the page until the user manually closes it.
    */
    alertsObj.persistAlert = function (alert) {
        alertsObj.alerts.forEach(function (al, i) {
            if (al.book.number == alert.book.number) {
                $timeout.cancel(alertsObj.alerts[i].promise);
            }
        });


    };

    return alertsObj;


});